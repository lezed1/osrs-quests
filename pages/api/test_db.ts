import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../lib/accounts/auth0';
import { getConnection } from '../../lib/database';
import { User } from '../../lib/database/entity';

export default async function test_db(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      });
      return;
    }

    await (await getConnection()).transaction(async (transation) => {
      const questStatuses = await transation
        .createQueryBuilder()
        .relation(User, 'questStatuses')
        .of(session.user.sub)
        .loadMany();
      const skillStatuses = await transation
        .createQueryBuilder()
        .relation(User, 'skillStatuses')
        .of(session.user.sub)
        .loadMany();

      res.json({ questStatuses, skillStatuses });
    });
  }
}
