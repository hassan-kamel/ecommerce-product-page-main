import React from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Cart from './Cart';
import avatar from '../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__burgerMenu'>
          <BurgerMenu status='close' />
        </div>
        <div className='navbar__logo'>
          <Logo />
        </div>
        <div className='navbar__cart'>
          <Cart />
        </div>
        <div className='navbar__avatar'>
          <img src={avatar} alt='Curly hair person avatar' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
