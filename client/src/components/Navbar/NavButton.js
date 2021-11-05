import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ id, title, icon }) => (
  <button
    style={{ width: '75px', height: '75px' }}
    type="button"
    className={`flex flex-col ${id === 1 ? 'bg-yellow-900 text-white-1' : 'bg-white-1 py-1 text-white-3 hover:bg-brown-3 hover:text-brown-1'} items-center justify-center rounded-xl font-medium text-2xl my-2 mx-2`}
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
