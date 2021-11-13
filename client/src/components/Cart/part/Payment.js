import { BsCash, BsFillCreditCard2BackFill } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../redux/cart/cartSlice';

function Payment() {
  const { methodPayment } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleChooseMethod = (type) => {
    dispatch(cartActions.chooseMethodPayment(type));
  };

  return (
    <div>

      <h3 className="text-2xl font-semibold mt-6">Payment Method </h3>
      <div className="mt-4 max-w-lg">
        <div className="grid grid-cols-3 shadow-sm gap-x-3 " role="group">
          <button
            type="button"
            className={
              `flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium  py-4 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1 ${methodPayment === 'cash' && 'text-brown-1 bg-brown-3 z-10 ring-2 ring-brown-1'}`
}
            onClick={() => handleChooseMethod('cash')}
          >
            <BsCash />
            <p className="text-base mt-2">Cash</p>
          </button>
          <button
            type="button"
            className={
              `flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium  py-4 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1 ${methodPayment === 'debit-cash' && 'text-brown-1 bg-brown-3 z-10 ring-2 ring-brown-1'}`
}
            onClick={() => handleChooseMethod('debit-cash')}
          >
            <BsFillCreditCard2BackFill />
            <p className="text-base mt-2">Debit Cash</p>
          </button>
          <button
            type="button"
            className={
              `flex flex-col items-center justify-center rounded-xl bg-white-1 text-2xl font-medium  py-4 text-gray-900 hover:bg-brown-3 hover:text-brown-1 focus:bg-brown-3 focus:z-10 focus:ring-2 focus:ring-brown-1 focus:text-brown-1 ${methodPayment === 'e-wallet' && 'text-brown-1 bg-brown-3 z-10 ring-2 ring-brown-1'}`
}
            onClick={() => handleChooseMethod('e-wallet')}
          >
            <GiWallet />
            <p className="text-base mt-2">E-wallet</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
