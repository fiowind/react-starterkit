'use strict';

import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <nav className="navfix" >
      <div className="nav-item active">
        <Link to="node/home" params={{nodename: "interest"}}>PRODUCT</Link>
      </div>
      <div className="nav-item">
        <Link to="node/default">GAMES</Link>
      </div>
      <div className="nav-item">
        <Link to="node/default">BOOKS</Link>
      </div>
      <div className="nav-item">
        <Link to="node/default">IDEAS</Link>
      </div>
      <div className="nav-item">
        <Link to="node/default">APP</Link>
      </div>
      <div className="nav-item">
        <Link to="node/default">DIY</Link>
      </div>
      <div className="nav-item">
        <Link to="node/2">DESIGN</Link>
      </div>
      <div className="feature">
        <i className="fa fa-bars"></i>
      </div>

    </nav>
  )
};

export default Header;