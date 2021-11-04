import React from 'react';
import { BsFillPenFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { utils } from '../../../helpers';
import { cartActions } from '../../../redux/cart/cartSlice';

const { formatMoney } = utils;

function Item({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row mt-7 gap-5">
      <img src={data.imgUrl} alt="item" className="w-20 h-20 rounded-2xl " />
      <div className="flex flex-col justify-between  w-full">
        <div className="flex justify-between">
          <p className="text-lg font-medium">{data.title}</p>

          <span className="flex items-center justify-between px-2 text-xs font-semibold  rounded-xl bg-brown-3 text-brown-1 fon">
            <BsFillPenFill className="mr-1" />
            {' '}
            Notes
          </span>

        </div>
        <div className="flex justify-between items-center  text-lg">
          <div className="flex items-center gap-x-4">
            {
              data.quantity
                ? (
                  <button
                    type="button"
                    className=" hover:bg-brown-2 active:bg-brown-2 rounded-full
                    bg-brown-3 w-9 h-9 text-center leading-9 font-medium text-2xl"
                    onClick={
                      () => dispatch(cartActions.updateQuantity({ id: data.id, status: false }))
                    }
                  >
                    -
                  </button>
                ) : (
                  <button
                    type="button"
                    className=" hover:bg-gray-50 active:bg-gray-50 rounded-full
                  bg-brown-3 w-9 h-9 leading-9 font-medium flex items-center justify-center text-red-700"
                    onClick={
                      () => dispatch(cartActions.removeItem(data.id))
                    }
                  >
                    <RiDeleteBin5Fill />
                  </button>
                )
            }
            <span>
              x
              <strong>{data.quantity}</strong>
            </span>
            <button
              type="button"
              className=" hover:bg-brown-2 active:bg-brown-2 rounded-full bg-brown-3 w-9 h-9 text-center leading-9 font-medium text-2xl"
              onClick={() => dispatch(cartActions.updateQuantity({ id: data.id, status: true }))}
            >
              +
            </button>
          </div>
          <div className="text-white-3 font-medium">{formatMoney(data.price)}</div>

        </div>
      </div>
    </div>
  );
}

export default Item;
Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
};
Item.defaultProps = {
  data: {},
};
