import React from 'react';
import Link from 'next/link';
import * as QuestPage from '../pages/quests';
import { useFetchUser } from '../lib/accounts/user';

const AccountLinks = () => {
  const { user, loading } = useFetchUser();

  if (loading) {
    return <li className="menu-text">Loading login info...</li>;
  }
  if (null == user) {
    return (
      <li>
        <Link href={`/api/login`}>Log in</Link>
      </li>
    );
  } else {
    return (
      <>
        <li className="menu-text">Logged in as {user.name}</li>
        <li>
          <Link href={`/api/logout`}>Log out</Link>
        </li>
      </>
    );
  }
};

const Layout = ({ children }) => {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">OSRS Quest Tracker</li>
            <li>
              <Link
                href="/"
                // activeClassName="is-active"
                // fix active class by applying to the <li>
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href={`/${QuestPage.routeBase}`}
                // activeClassName="is-active"
              >
                Quest Info
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <AccountLinks />
          </ul>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-y">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
