import React from 'react';

import {Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const HorizontalNav = () => {
  return(
     
      <Navbar bg="light" expand="lg">
        <Link to="/" className="navbar-brand" >REACT-REDUX</Link>
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="#" className="nav-link">Contact</Link>
        </ul>
      </Navbar>
  )
};

export default HorizontalNav;
