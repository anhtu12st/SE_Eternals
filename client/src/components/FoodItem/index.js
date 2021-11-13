import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Header, AddToCart, ChooseSize, ChooseMood, ChooseIce, ChooseSugar,
} from './part';
import { cartActions } from '../../redux/cart/cartSlice';

function FoodItem({ data }) {
  const {
    id, category, title, imgUrl, description, price,
  } = data;

  const dispatch = useDispatch();
  const [option, setOption] = useState({
    id,
    size: null,
    mood: null,
    ice: null,
    sugar: null,
  });

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(
      { ...data, quantity: 1 },
    ));
  };

  const handleChangeOption = (e) => {
    const { name, value } = e.target;

    setOption({
      ...option,
      [name]: value,
    });
  };

  return (
    <div className="w-84 shadow rounded-xl p-5 m-3 bg-white">
      <Header
        title={title}
        imgUrl={imgUrl}
        description={description}
        price={price}
      />
      <div className="flex flex-row flex-wrap justify-between pt-5">
        {category[0] === 'drink'
        && <ChooseMood id={option.id} mood={option.mood} onChangeOption={handleChangeOption} />}
        <ChooseSize id={option.id} size={option.size} onChangeOption={handleChangeOption} />
        {category[0] === 'drink'
        && <ChooseIce id={option.id} ice={option.ice} onChangeOption={handleChangeOption} />}
        {category[0] === 'drink'
        && <ChooseSugar id={option.id} sugar={option.sugar} onChangeOption={handleChangeOption} />}
      </div>
      <AddToCart
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

FoodItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

FoodItem.defaultProps = {
  data: {},
};

export default FoodItem;
