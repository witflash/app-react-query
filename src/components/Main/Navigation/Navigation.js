import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { tabs } from './config';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation-list">
        {tabs.map((tab) => (
          <li key={tab.name} className="Navigation-item">
            <NavLink to={tab.pathname} className="Navigation-link">{tab.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(Navigation);
