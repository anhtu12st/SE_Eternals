import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { utils } from '../../../helpers';
import { globalActions } from '../../../redux/global/globalSlice';

const { formatMoney } = utils;

function Header(props) {
  const {
    id, title, imgUrl, description, price,
  } = props;
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(globalActions.setOpenFoodItemModal(id))}
    >
      <div
        className="grid grid-flow-col auto-cols-auto gap-x-4"
      >
        <div className="w-28 h-32">
          <img
            src={imgUrl}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-between text-left">
          <div className="font-semibold text-xl leading-5">{title}</div>
          <div className="text-white-2 text-sm leading-4">{description}</div>
          <div className="font-bold text-xl leading-none pt-0">
            {formatMoney(price)}
          </div>
        </div>
      </div>
    </button>
  );
}

Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
};

Header.defaultProps = {
  id: '',
  title: 'Caramel Frappuccino',
  imgUrl:
    'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYXBwdWNjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  description: 'Caramel syrup with coffee, milk, and whipped cream',
  price: 20000,
};

export default Header;
