import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header, AddToCart, ChooseSize, ChooseMood, ChooseIce, ChooseSugar,
} from './part';

function FoodItem(props) {
  const {
    title, imgUrl, description, price,
  } = props;

  const [option, setOption] = useState({
    size: null,
    mood: null,
    ice: null,
    sugar: null,
  });

  const handleAddToCart = () => {
    // console.log('click add to cart: ', option);
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
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

FoodItem.defaultProps = {
  //   category: 'drink',
  title: 'Caramel Frappuccino',
  imgUrl:
    'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYXBwdWNjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  description: 'Caramel syrup with coffee, milk, and whipped cream',
  price: 20000,
};

export default FoodItem;
