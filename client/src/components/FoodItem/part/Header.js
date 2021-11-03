import PropTypes from 'prop-types';
import React from 'react';
import { utils } from '../../../helpers';

const { formatMoney } = utils;

function Header(props) {
  const {
    title, imgUrl, description, price,
  } = props;

  return (
    <div className="grid grid-flow-col auto-cols-auto gap-x-4">
      <div className="w-28 h-32">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="font-semibold text-xl leading-5">{title}</div>
        <div className="text-white-2 text-sm leading-4">{description}</div>
        <div className="font-bold text-xl leading-none pt-0">
          {formatMoney(price)}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
};

Header.defaultProps = {
  title: 'Caramel Frappuccino',
  imgUrl:
    'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYXBwdWNjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  description: 'Caramel syrup with coffee, milk, and whipped cream',
  price: 20000,
};

export default Header;
