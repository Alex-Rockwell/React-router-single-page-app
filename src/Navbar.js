import React, { Component } from 'react'
import { 
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath
 } from 'react-router-dom'
 import './Navbar.css'

 function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={'Navbar-link' + (match ? ' active' : '')}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/help">Help</CustomLink>
          <CustomLink to="/contacts">Contacts</CustomLink>
        </div>
        <Outlet className="container"/>
      </div>
    )
  }
}

export default Navbar