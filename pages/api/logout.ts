import auth0 from '../../lib/accounts/auth0';

export default async function login(req, res) {
  try {
    await auth0.handleLogout(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
