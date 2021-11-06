import React from 'react';
import { useSelector } from 'react-redux';
import { Item, Payment, Total } from './part';

function Cart() {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="p-4 px-6 bg-white h-full w-full flex-1 flex flex-col overflow-auto">
      <div className="">
        <h2 className="text-1xl sm:text-2xl font-semibold">Bills</h2>
        <div className="overflow-auto over-item">
          {items && items.map((item) => (
            <Item data={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Total />
      </div>

      <Payment />

      <button type="button" className="mt-6 w-full py-4 bg-brown-2 text-white-1 font-semibold rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brown-1 focus:ring-opacity-75">Prints Bill</button>
    </div>
  );
}

export default Cart;
