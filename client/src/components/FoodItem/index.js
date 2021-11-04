import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Header, AddToCart, ChooseSize, ChooseMood, ChooseIce, ChooseSugar,
} from './part';
import { cartActions } from '../../redux/cart/cartSlice';

function FoodItem({ data }) {
  const {
    title, imgUrl, description, price,
  } = data;

  const dispatch = useDispatch();
  const [option, setOption] = useState({
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
    const { name } = e.target;
    const value = e.target.id;

    setOption({
      ...option,
      [name]: value,
    });
  };

  return (
    <div className="w-84 shadow rounded-xl p-5">
      <Header
        title={title}
        imgUrl={imgUrl}
        description={description}
        price={price}
      />
      <div className="flex flex-row flex-wrap justify-between pt-5">
        <ChooseMood mood={option.mood} onChangeOption={handleChangeOption} />
        <ChooseSize size={option.size} onChangeOption={handleChangeOption} />
        <ChooseIce ice={option.ice} onChangeOption={handleChangeOption} />
        <ChooseSugar sugar={option.sugar} onChangeOption={handleChangeOption} />
      </div>
      <AddToCart
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

FoodItem.propTypes = {
  // category: PropTypes.string, // Some category: Drink, Pizza, Rice box, Cake, Sushi, Noodles,...
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

FoodItem.defaultProps = {
  //   category: 'drink',
  data: {},
};

export default FoodItem;
