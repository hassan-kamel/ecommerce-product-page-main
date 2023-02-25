import React from 'react';
import ImageProduct from '../assets/images/image-product-1.jpg';
import Delete from './Delete';

interface ICartInfo {
  orderNumber: number;
  cartOpend: boolean;
}

const CartInfo = ({ orderNumber, cartOpend }: ICartInfo) => {
  const price = 125;

  if (!cartOpend) {
    return <></>;
  }
  return (
    <div className='cartInfo'>
      <h3 className='cartInfo__head'>Cart</h3>
      <div className='cartInfo__carts'>
        <img src={ImageProduct} alt='white shoes' />
        <div className='cartInfo__details'>
          <p className='cartInfo__title'>Fall Limited Edition Sneakers</p>
          <p className='cartInfo__price'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}{' '}
            x {orderNumber}
            <span>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(price * orderNumber)}
            </span>
          </p>
        </div>
        <Delete />
      </div>
      <div className='cartInfo__cta'>Checkout</div>
    </div>
  );
};

export default CartInfo;
