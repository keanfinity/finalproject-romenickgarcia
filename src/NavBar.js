import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => (

  <nav id="navbar" class="navbar navbar-expand-lg nav-border-b shadow top-sticky bg-light" style={{height:'80px'}}>
    <img className="navbar-brand navbar-logo" alt="" src="https://static.vecteezy.com/system/resources/thumbnails/000/620/372/small/aviation_logo-22.jpg"></img>

  <ul class="navbar-nav">
    <li class="nav-item">
    <Link className="nav-link" to="/">Home</Link>
    </li>
    <li class="nav-item">
    <Link className="nav-link" to="/about">About</Link>
    </li>
    <li class="nav-item">
    <Link className="nav-link" to="/journey-list">Journey</Link>
    </li>
  </ul>

</nav>

)

export default NavBar;