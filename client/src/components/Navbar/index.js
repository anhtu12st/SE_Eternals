import React from 'react';
import NavButton from './NavButton';

const buttons = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'Menu' },
  { id: 3, title: 'History' },
  { id: 4, title: 'Wallet' },
  { id: 5, title: 'Promos' },
];

const Navbar = () => (
  <div className="flex flex-col items-center">
    {buttons.map(({ id, title }) => (
      <NavButton id={id} title={title} />
    ))}
  </div>
);

export default Navbar;
