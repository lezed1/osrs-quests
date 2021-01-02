import auth0 from '../../lib/accounts/auth0';
import { getConnection } from '../../lib/database';
import { User } from '../../lib/database/entity/User';

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, {
      redirectTo: '/',
      onUserLoaded: async (req, res, session, state) => {
        await (await getConnection()).transaction(
          async (transactionalEntityManager) => {
            const userRepository = transactionalEntityManager.getRepository(
              User
            );
            let user = await userRepository.findOne(session.user.sub);
            if (!user) {
              user = new User();
              user.id = session.user.sub;
              await userRepository.save(user);
            }
          }
        );
        return session;
      },
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
