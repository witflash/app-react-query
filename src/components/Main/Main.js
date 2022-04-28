import { Routes, Route, Link } from 'react-router-dom';

import { ROUTE } from 'routes';

import { Navigation } from './Navigation';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <header>
        <div className="Main-header">
          <h1 className="Main-title">
            <Link to="/" className="Main-link">
              Playground
            </Link>
          </h1>
          <p className="Main-subtitle">
            for React Query library
          </p>
        </div>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<p>Welcome to Sandbox!</p>}
          />
          <Route
            path={ROUTE.PAGES}
            element={<p>Pages</p>}
          />
          <Route
            path={ROUTE.CONTENT_BLOCKS}
            element={<p>Content Blocks</p>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default Main;
