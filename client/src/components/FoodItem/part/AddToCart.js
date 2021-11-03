import React from 'react';
import PropTypes from 'prop-types';

function AddToCart(props) {
  const { onAddToCart } = props;

  return (
    <div>
      <button
        type="button"
        className="
        w-full
        h-11
        bg-brown-4 rounded-xl text-center text-white font-semibold mt-4
        hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-brown-1 focus:ring-opacity-75
        transition-colors
      "
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

AddToCart.propTypes = {
  onAddToCart: PropTypes.func,
};

AddToCart.defaultProps = {
  onAddToCart: null,
};

export default AddToCart;
