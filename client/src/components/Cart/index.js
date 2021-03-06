import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { globalActions } from '../../redux/global/globalSlice';
import { Item, Payment, Total } from './part';

function Cart({ payment }) {
  const { items, methodPayment } = useSelector((state) => state.cart);
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    showPopup && setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }, [showPopup]);
  const handleRedirectPayment = () => {
    if (methodPayment !== '') {
      dispatch(globalActions.setInit());
      return history.push('/payment');
    }
    return setShowPopup(true);
  };
  return (
    <>
      {showPopup && <div className="popup absolute top-3 bg-gray-900 text-white left-1/4 rounded-2xl px-4 py-2 translate-y-6">Please choose payment method!</div>}
      <div className={`p-4 px-6 bg-white h-full flex-1 flex flex-col overflow-auto ${payment && 'shadow-xl rounded-xl'}`}>
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

        {!payment
          && (
            <>
              <Payment />
              <button
                type="button"
                onClick={() => handleRedirectPayment()}
                className="mt-6 w-full py-4  text-white-1 font-semibold rounded-lg bg-brown-4 border-brown-3
                hover:bg-brown-2 active:bg-brown-1 focus:ring-brown-1"
                disabled={items.length <= 0}
              >
                Prints Bill
              </button>
            </>
          )}
      </div>
    </>
  );
}

export default Cart;
