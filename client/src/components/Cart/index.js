import React from 'react';
import { useSelector } from 'react-redux';
import { Item, Payment, Total } from './part';

function Cart() {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="pt-4 pb-6 px-10">
      <h2 className="text-2xl font-semibold">Bills</h2>
      <div className="overflow-auto over-item">
        {items && items.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </div>

      <div className="mt-14">
        <Total />
      </div>

      <Payment />

      <button type="button" className="mt-9 w-full py-4 bg-brown-1 text-white-1 font-semibold rounded-lg shadow-md hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-brown-1 focus:ring-opacity-75">Prints Bill</button>
    </div>
  );
}

export default Cart;
