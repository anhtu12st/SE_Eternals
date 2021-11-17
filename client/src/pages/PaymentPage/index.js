/* eslint-disable */
import { useForm } from 'react-hook-form';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Cart, InputField } from '../../components';
import { createPayment } from '../../services/payment.service';
import { utils } from '../../helpers/utils';
import { cartActions } from '../../redux/cart/cartSlice';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';
import { useSwipeable } from 'react-swipeable';
import { globalActions } from '../../redux/global/globalSlice';


const { totalPrice } = utils;
const PaymentPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { methodPayment, items } = useSelector((state) => state.cart);
  const { openNavbar, openCartPayment } = useSelector((state) => state.global);
  const [error, setError] = useState('');
  const defaultValues = methodPayment === 'cash'
    ? {
      name: '',
      phone: '',
    } : {
      name: '',
      phone: '',
      cardName: '',
      cardNumber: '',
      CVVNumber: '',
      validDate: '',
    };
  const { control, handleSubmit } = useForm({
    defaultValues,
  });
  const handleFormSubmit = async (values) => {
    const arrayItem = items.map((item) => ({ title: item.title, quantity: item.quantity }));
    const totalCart = totalPrice(items);
    const data = {
      ...values,
      total: totalCart + totalCart * 1.1,
      totalAmount: totalCart,
      type: methodPayment,
      items: arrayItem,
    };
    const { errCode, errDetail } = await createPayment(data);
    if (errCode) {
      return setError(errDetail);
    }
    dispatch(cartActions.initCart());
    return history.push('/');
  };

  const handlers = useSwipeable({
    onSwipedRight: (e) => {
      if (!openCartPayment && e.initial[0] > 80 || e.velocity < 1) return;

      if (openCartPayment) {
        return dispatch(globalActions.setOpenCartPayment(false));
      }
    },
    onSwipedLeft: (e) => {
      if (!openNavbar && e.initial[0] < 300 || e.velocity < 1) return;

      if (!openCartPayment) {
        return dispatch(globalActions.setOpenCartPayment(true));
      }
    },
  });
  return (
    <Fragment>
      <Helmet title="Payment" />
      <div {...handlers} className="sm:flex h-screen justify-center items-center gap-10">
        <form onSubmit={handleSubmit(handleFormSubmit)} className=" bg-white h-full sm:h-5/6 sm:w-1/3 rounded-xl shadow-xl overflow-hidden p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl  ">Payment Detail</h2>
            {error !== '' && <p className="text-center text-red-500 my-2 font-medium">{error}</p>}
            {methodPayment !== 'cash' && <img className="w-24 h-12  border rounded-lg border-brown-1 mt-6" src="https://www.masabi.com/wp-content/uploads/2016/04/mastercard-logo.jpg" alt="master" />}
            <InputField
              type="text"
              placeholder="John Doe"
              name="name"
              control={control}
              label="Name"
              rules={{ required: 'Name is missing!' }}
              required
            />
            <InputField
              type="number"
              placeholder="0961549345"
              name="phone"
              label="Phone Number"
              control={control}
            />
            {
              methodPayment !== 'cash'
              && (
                <>
                  <InputField
                    type="text"
                    placeholder="John Doe"
                    name="cardName"
                    label="Cardholder Name"
                    control={control}
                    rules={{ required: 'Cardholder Name is missing!' }}
                    required
                  />

                  <InputField
                    type="number"
                    placeholder="000-3443-3443"
                    name="cardNumber"
                    label="Card Number"
                    control={control}
                    rules={{ required: 'Card Number is missing!' }}
                    required
                  />

                  <div className="sm:flex justify-between">
                    <InputField
                      type="date"
                      name="validDate"
                      label="Valid Thur"
                      control={control}
                      rules={{ required: 'Card Number is missing!' }}
                      required
                    />
                    <InputField
                      type="number"
                      placeholder="1234"
                      name="CVVNumber"
                      label="CVV Number"
                      control={control}
                      rules={{ required: 'Card Number is missing!' }}
                      required
                    />
                  </div>
                </>
              )
            }
          </div>
          <div className="flex justify-between mt-6">
            <button type="button" className="flex items-center text-gray-800" onClick={() => history.push('/')}>
              {' '}
              <IoChevronBackOutline />
              {' '}
              Back
            </button>
            <button type="submit" className="shadow-xl px-16 py-5 rounded-xl bg-gradient-to-r from-brown-1 via-brown-2 to-red-500 hover:transition ease-in duration-700 text-lg  text-white">Place Order</button>
          </div>
        </form>
        <div className={`${openCartPayment ? 'translate-x-0' : 'translate-x-full'} 
            w-full fixed h-screen right-0 sm:translate-x-0 sm:w-108 sm:static sm:h-5/6
            transform top-0 ease-in-out transition-all duration-300 z-30
            `}><Cart payment /></div>
      </div>
    </Fragment>
  );
};

export default PaymentPage;
