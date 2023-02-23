import React, { FunctionComponent, useEffect } from 'react';
import { useState } from 'react';

const BurgerMenu = ({ status }: { status: string }) => {
  const [closed, setclosed] = useState(true);
  useEffect(() => {
    status == 'close' ? setclosed(true) : setclosed(false);
  }, [status]);

  const Close: FunctionComponent = () => (
    <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
        fill='#69707D'
        fillRule='evenodd'
      />
    </svg>
  );

  const Menu: FunctionComponent = () => (
    <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
        fill='#69707D'
        fillRule='evenodd'
      />
    </svg>
  );

  if (closed) return <Menu />;
  else return <Close />;
};

export default BurgerMenu;
