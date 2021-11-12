import { useForm } from 'react-hook-form';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Cart, InputField } from '../../components';

const PaymentPage = () => {
  const history = useHistory();
  const { methodPayment } = useSelector((state) => state.cart);
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
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="flex w-2/3  gap-x-10">
        <form onSubmit={handleSubmit(handleFormSubmit)} className=" bg-white w-1/2 rounded-xl shadow-xl overflow-hidden p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-2xl  ">Payment Detail</h2>
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

                <div className="flex justify-between">
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
        <Cart payment />
      </div>
    </div>
  );
};

export default PaymentPage;
