import React from 'react';
import Link from 'next/link';
import * as QuestPage from '../pages/quests';

export default function Layout({ children }) {
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
      </div>
      <div className="grid-container">
        <div className="grid-y">{children}</div>
      </div>
    </div>
  );
}
