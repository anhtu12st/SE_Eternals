import React from 'react';
import { AiFillHome, AiFillClockCircle } from 'react-icons/ai';
import { GiHotMeal } from 'react-icons/gi';
import { IoWallet, IoPricetag } from 'react-icons/io5';
import NavButton from './NavButton';

const buttons = [
  { id: 1, title: 'Home', icon: <AiFillHome /> },
  { id: 2, title: 'Menu', icon: <GiHotMeal /> },
  { id: 3, title: 'History', icon: <AiFillClockCircle /> },
  { id: 4, title: 'Wallet', icon: <IoWallet /> },
  { id: 5, title: 'Promos', icon: <IoPricetag /> },
];

const Navbar = () => (
  <div className="flex flex-col items-center py-2">
    {buttons.map(({ id, title, icon }) => (
      <NavButton key={id} id={id} title={title} icon={icon} />
    ))}
  </div>
);

export default Navbar;
