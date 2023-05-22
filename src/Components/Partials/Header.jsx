import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
     <div className='my-header'>
    <header>
     <nav>
      <h1>My Header</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="Header">Header</NavLink>
      <NavLink to="Footer">Footer</NavLink>
      </nav>
    </header>
    <main>
     <Outlet />
    </main>
    </div>
  );
}

export default Header;
