import React from 'react';

const MobileNavbar = () => (
  <div className="flex flex-col">
    <button
      type="button"
      className="flex justify-center bg-white-1 rounded hover:bg-brown-3 hover:text-brown-1 focus:bg-yellow-900 focus:z-10 focus:text-white-1 focus:ring-2 focus:ring-brown-1 py-1 m-2"
    >
      <h1 className="text-base">Home</h1>
    </button>
    <button
      type="button"
      className="flex justify-center bg-white-1 rounded hover:bg-brown-3 hover:text-brown-1 focus:bg-yellow-900 focus:z-10 focus:text-white-1 focus:ring-2 focus:ring-brown-1 py-1 m-2"
    >
      <h1 className="text-base">Menu</h1>
    </button>
    <button
      type="button"
      className="flex justify-center bg-white-1 rounded hover:bg-brown-3 hover:text-brown-1 focus:bg-yellow-900 focus:z-10 focus:text-white-1 focus:ring-2 focus:ring-brown-1 py-1 m-2"
    >
      <h1 className="text-base">History</h1>
    </button>
    <button
      type="button"
      className="flex justify-center bg-white-1 rounded hover:bg-brown-3 hover:text-brown-1 focus:bg-yellow-900 focus:z-10 focus:text-white-1 focus:ring-2 focus:ring-brown-1 py-1 m-2"
    >
      <h1 className="text-base">Wallet</h1>
    </button>
    <button
      type="button"
      className="flex justify-center bg-white-1 rounded hover:bg-brown-3 hover:text-brown-1 focus:bg-yellow-900 focus:z-10 focus:text-white-1 focus:ring-2 focus:ring-brown-1 py-1 m-2"
    >
      <h1 className="text-base">Promos</h1>
    </button>
  </div>
);

export default MobileNavbar;
