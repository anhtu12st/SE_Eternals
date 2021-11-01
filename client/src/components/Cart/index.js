import React from 'react';
import { Item, Payment, Total } from './part'
import { data } from './data';


function Cart(props) {

    return (
        <div className="pt-4 pb-6 px-10">
            <h2 className="text-2xl font-semibold">Bills</h2>
            <div className="overflow-auto over-item">
                {data && data.map((item, index) => (
                    <Item data={item} key={index} />
                ))}
            </div>

            <div className="mt-14">
                <Total data={data} />
            </div>

            <Payment />

            <button className="mt-9 w-full py-4 bg-brown-1 text-white-1 font-semibold rounded-lg shadow-md hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-brown-1 focus:ring-opacity-75">Prints Bill</button>
        </div>
    );
}

export default Cart;