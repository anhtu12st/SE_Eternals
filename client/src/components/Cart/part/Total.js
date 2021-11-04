import React from 'react';
import { useSelector } from 'react-redux';
import { utils } from '../../../helpers';

const { formatMoney, totalPrice } = utils;

function Total() {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex justify-between text-lg font-medium">
        <span>Subtotal</span>
        <span>{formatMoney(totalPrice(items))}</span>
      </div>
      <div className="flex justify-between mt-3 text-base font-medium text-white-3">
        <span>Tax (10%)</span>
        <span>{formatMoney(totalPrice(items) / 10)}</span>
      </div>
      <div className="my-5 border-dashed border border-white-2" />
      <div className="flex justify-between text-lg font-medium">
        <span>Total</span>
        <span>{formatMoney(totalPrice(items) + totalPrice(items) * 0.1)}</span>
      </div>
    </>
  );
}

export default Total;
