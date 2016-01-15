import React from 'react';
import Header from '../components/header.jsx';
import Nav from '../components/nav.jsx'

const App = (props) => {
    return (
      <div>
        <Header />
        <Nav />
        <div className="content">
          {props.children}
        </div>
      </div>
    );
};

export default App;