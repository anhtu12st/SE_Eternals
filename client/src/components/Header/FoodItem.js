import React from 'react';
import PropTypes from 'prop-types';

const FoodItem = ({ imgUrl, title, id }) => (
  <div className="flex justify-center items-center">
    <button
      style={{ height: '150px', width: '150px' }}
      type="button"
      className="flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium py-1 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1 my-2 mx-2"
      id={id}
    >
      <img className="w-2/3 h-2/3 rounded" src={imgUrl} alt="food" />
      <p className="text-base mt-2">{title}</p>
    </button>
  </div>
);

FoodItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
};

FoodItem.defaultProps = {
  imgUrl: '',
  title: '',
};

export default FoodItem;
