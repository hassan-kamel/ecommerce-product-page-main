import React, { useContext, useEffect, useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import Cart from './Cart';
import avatar from '../assets/images/image-avatar.png';
import Links from './Links';
import { useState } from 'react';
import { AppContext } from '../App';
import CartInfo from './CartInfo';

const Navbar = () => {
  // Getting data from the context
  const contextValue = useContext(AppContext);
  const cartDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    cartDiv.current?.setAttribute(
      'content-value',
      String(contextValue?.orderCounter),
    );
    // Hide the number of orders if there is no orders
    if (contextValue && contextValue.orderCounter < 1) {
      cartDiv.current?.classList.add('after-hidden');
    }
  }, [contextValue?.orderCounter]);

  // State and Method to Toggle menu
  const [menuOpend, setmenuOpend] = useState<boolean>(false);
  const toggleMenu = () => {
    setmenuOpend(!menuOpend);
  };

  // State and Method to Toggle Cart details
  const [cartOpend, setCartOpend] = useState<boolean>(false);
  const toggleCart = () => {
    setCartOpend(!cartOpend);
  };

  // Render
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__burgerMenu'>
          <BurgerMenu status='close' onClick={toggleMenu} />
        </div>
        <div className='navbar__logo'>
          <Logo />
        </div>
        <div className={`navbar__links ${!menuOpend ? 'hidden' : ''}`}>
          <BurgerMenu status='open' onClick={toggleMenu} />
          <Links />
        </div>
        <div className='navbar__cart' ref={cartDiv}>
          <Cart onClick={toggleCart} />
        </div>
        <div className='navbar__avatar'>
          <img src={avatar} alt='Curly hair person avatar' />
        </div>
      </div>
      {contextValue && (
        <CartInfo
          cartOpend={cartOpend}
          orderNumber={contextValue.orderCounter}
        />
      )}
    </div>
  );
};

export default Navbar;
