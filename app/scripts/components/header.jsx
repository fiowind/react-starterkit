'use strict';

import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="clearfix">
      <Link to="#">
        <i className="fa fa-dot-circle-o"></i>
        <span className="appname">Yfind.us</span>
      </Link>
      <section className="loginsection">
        <i className="fa fa-ellipsis-h"></i>
        <span className="loginhint">登录</span>
      </section>
      <section>
        <label for="search-input"><i className="fa fa-search"></i></label>
        <input id="search-input" type="text" placeholder="SEARCH"/>
      </section>
    </header>
  )
};

export default Header;