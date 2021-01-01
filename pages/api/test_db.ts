import auth0 from '../../lib/accounts/auth0';
import { getConnection } from '../../lib/database';
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

    const connection = await getConnection();
    const users = await connection.getRepository(User).find();

    res.json(users);

    return;
  }
}
