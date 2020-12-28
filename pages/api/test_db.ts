import { getConnection } from 'typeorm';
import auth0 from '../../lib/accounts/auth0';
import { createConnection } from '../../lib/database';
import { User } from '../../lib/database/entity/User';

export default async function test_db(req, res) {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      });
      return;
    }

    const connection = await createConnection();
    const users = await connection.transaction(
      async (transactionalEntityManager) => {
        const userRepository = connection.getRepository(User);
        let user = await userRepository.findOne(session.user.sub);
        if (!user) {
          user = new User();
          user.id = session.user.sub;
          user.created_at = new Date();
          await userRepository.save(user);
        }

        return userRepository.find();
      }
    );

    res.json(users);
    return;
  }
}
