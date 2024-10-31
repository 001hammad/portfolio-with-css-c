import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header id="nav-container">
      <div>
        <img src="/logo.png" alt="logo" className="logo" />
      </div>
      <div id="navbar-menu">
        <Link href="#Home" ><p className='nav-menu'>Home</p></Link>
        <Link href="#About"><p className='nav-menu'>About</p></Link>
        <Link href="#Project"><p className='nav-menu'>Project</p></Link>
        <Link href="#Contact"><p className='nav-menu'>Contact</p></Link>
       
      </div>
    </header>
  );
};

export default Header;