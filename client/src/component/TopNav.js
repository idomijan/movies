import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-inverse">
        <Link to="/" className="navbar-brand">
          Movies
        </Link>
      </nav>
      <div className="navbar fixed-bottom">
        <Link to="/new" className="btn btn-outline-primary w-100 p-3">
          Add new movie
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
