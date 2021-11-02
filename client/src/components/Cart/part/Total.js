import React from 'react';
import PropTypes from 'prop-types';
import { utils } from '../../../helpers';

const { formatMoney } = utils;

function Total({ data }) {
  const totalPrice = (items) => items.reduce((result, a) => result + a.quantity * a.price, 0);
  return (
    <>
      <div className="flex justify-between text-lg font-medium">
        <span>Subtotal</span>
        <span>{formatMoney(totalPrice(data))}</span>
      </div>
      <div className="flex justify-between mt-3 text-base font-medium text-white-3">
        <span>Tax (10%)</span>
        <span>{formatMoney(totalPrice(data) / 10)}</span>
      </div>
      <div className="my-5 border-dashed border border-white-2" />
      <div className="flex justify-between text-lg font-medium">
        <span>Total</span>
        <span>{formatMoney(totalPrice(data) + totalPrice(data) / 10)}</span>
      </div>
    </>
  );
}

export default Total;
Total.propTypes = {
  data: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};
Total.defaultProps = {
  data: [],
};
