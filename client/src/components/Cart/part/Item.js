import React from 'react';
import { BsFillPenFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { utils } from '../../../helpers';

const { formatMoney } = utils;

function Item({ data }) {
  return (
    <div className="flex flex-row mt-7 gap-5">
      <img src={data.image} alt="item" className="w-20 h-20 rounded-2xl " />
      <div className="flex flex-col justify-between w-full">
        <p className="text-lg font-medium">{data.name}</p>
        <div className="flex justify-between text-lg">
          <div className="flex gap-x-4">
            <span>
              x
              <strong>{data.quantity}</strong>
            </span>
            <span className="flex items-center justify-between px-2 text-xs font-semibold  rounded-xl bg-brown-3 text-brown-1 fon">
              <BsFillPenFill className="mr-1" />
              {' '}
              Notes
            </span>
          </div>
          <div className="text-white-3 font-medium">{formatMoney(data.price)}</div>

        </div>
      </div>
    </div>
  );
}

export default Item;
Item.propTypes = {
  data: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};
Item.defaultProps = {
  data: [],
};
