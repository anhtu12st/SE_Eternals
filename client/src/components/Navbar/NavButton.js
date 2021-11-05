import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ id, title, icon }) => (
  <button
    style={{ width: '75px', height: '75px' }}
    type="button"
    className="flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium py-1 text-white-3 hover:bg-brown-3 hover:text-brown-1 focus:bg-yellow-900 focus:z-10 focus:text-white-1 my-2 mx-2"
    id={id}
  >
    {icon}
    <h3 className="text-xs">{title}</h3>
  </button>
);

NavButton.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default NavButton;
