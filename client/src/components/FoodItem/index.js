/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Header, AddToCart, ChooseSize, ChooseMood, ChooseIce, ChooseSugar,
} from './part';
import { cartActions } from '../../redux/cart/cartSlice';
import { globalActions } from '../../redux/global/globalSlice';
import ChooseQuantity from './part/ChooseQuantity';

function FoodItem({ data }) {
  const {
    id, category, title, imgUrl, description, price,
  } = data;
  const { openFoodItemModal } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  const [option, setOption] = useState({
    id,
    size: null,
    mood: null,
    ice: null,
    sugar: null,
    quantity: 1,
  });

  const handleAddToCart = () => {
    setOption({
      ...option,
      quantity: 1,
    });

    dispatch(cartActions.addItem(
      { ...data, quantity: option.quantity },
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
        id={id}
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
      {openFoodItemModal === id && (
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black-0.25"
          onClick={() => dispatch(globalActions.setOpenFoodItemModal(false))}
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              onClick={(e) => { e.stopPropagation() }}
            >
              <div className="p-3 sm:p-8" >
                <Header
                  id={id}
                  title={title}
                  imgUrl={imgUrl}
                  description={description}
                  price={price}
                />
                <div className="grid grid-cols-2">
                  {category[0] === 'drink'
                    && <ChooseMood id={option.id} mood={option.mood} onChangeOption={handleChangeOption} />}
                  <ChooseSize id={option.id} size={option.size} onChangeOption={handleChangeOption} />
                  {category[0] === 'drink'
                    && <ChooseIce id={option.id} ice={option.ice} onChangeOption={handleChangeOption} />}
                  {category[0] === 'drink'
                    && <ChooseSugar id={option.id} sugar={option.sugar} onChangeOption={handleChangeOption} />}
                  <ChooseQuantity id={option.id} quantity={option.quantity} onChangeOption={handleChangeOption} />
                  <div className="py-3 col-span-2">
                    <div className="pl-1 font-bold">Notes</div>
                    <div>
                    <input type="text" class="px-4 py-3 bg-gray-100 rounded-xl w-full" />
                    </div>
                  </div>
                </div>
                <AddToCart
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="flex items-center justify-end p-3 sm:p-8 border-t border-solid border-blueGray-200">
                <button
                  className="text-red-500 bg-gray-100 font-bold uppercase px-6 py-2 h-11 w-full text-center text-sm outline-none focus:outline-none rounded-xl"
                  type="button"
                  onClick={() => dispatch(globalActions.setOpenFoodItemModal(false))}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
