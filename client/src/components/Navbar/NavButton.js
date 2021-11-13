import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const NavButton = ({ id, title, icon }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleClickNavButton = () => {
    history.push(`/${title.toLowerCase()}`);
  };

  return (
    <button
      style={{ width: '75px', height: '75px' }}
      type="button"
      className={`flex flex-col 
      ${pathname.includes(title === 'Home' ? 'category' : title.toLowerCase()) ? 'bg-yellow-900 text-white-1' : 'bg-white-1 py-1 text-white-3 hover:bg-brown-3 hover:text-brown-1'} 
      items-center justify-center rounded-xl font-medium text-2xl my-2 mx-2`}
      id={id}
      onClick={handleClickNavButton}
    >
      {icon}
      <h3 className="text-xs">{title}</h3>
    </button>
  );
};

NavButton.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default NavButton;
