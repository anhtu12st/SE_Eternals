import React from 'react';
import { BsCash, BsFillCreditCard2BackFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";

function Payment(props) {
    return (
        <>
            <h3 className="text-2xl font-semibold mt-8">Payment Method </h3>
            <div class=" mt-8 max-w-lg ">
                <div class="grid grid-cols-3 shadow-sm gap-x-3 " role="group">
                    <button type="button" className="flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium  py-4 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1">
                        <BsCash />
                        <p className="text-base mt-2">Cash</p>
                    </button>
                    <button type="button" className="flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium  py-4 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1">
                        <BsFillCreditCard2BackFill />
                        <p className="text-base mt-2">Debit Cash</p>
                    </button>
                    <button type="button" className="flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium  py-4 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1">
                        <GiWallet />
                        <p className="text-base mt-2">E-wallet</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Payment;