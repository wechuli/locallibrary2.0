import React from "react";
import {NavLink} from 'react-router-dom'
import Logo from '../../logo.svg'

const Header = props => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
    <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
     Locallibrary
  </a>
 
  
    <div className="collapse navbar-collapse center">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Books</a>
        </li>
     
        <li className="nav-item">
          <a className="nav-link" href="#">Authors</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Books</button>
      </form>
    </div>
  </nav>
  );
};

export default Header;
