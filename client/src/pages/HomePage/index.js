/* eslint-disable */
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { utils } from '../../helpers';
import Axios from '../../services/Axios';

const { getCategoryDetailByName } = utils;

import {
  FoodItem, Header,
} from '../../components';
import { foodItemActions } from '../../redux/foodItem/foodItemSlice';
import { categoryActions } from '../../redux/category/categorySlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const { category } = useSelector(state => state.category);
  const foodItems = useSelector(state => state.foodItem.items);
  const { categoryName } = useParams();

  useEffect(() => {
    const getNewFoodItemData = async () => {
      try {
        console.log(categoryName);
        const { data } = await Axios.get(`/list-food-items/${categoryName.toLowerCase()}`);
        dispatch(foodItemActions.setFoodItem(data));
        dispatch(categoryActions.chooseCategory(getCategoryDetailByName(categoryName)));
      } catch (error) {
        console.error(error)
      }
    }

    getNewFoodItemData();
  }, [categoryName]);

  return (
    <Fragment>
      <Helmet title='Home Page' />
      {
        items.length > 0 &&
        <div
          className="sm:hidden bg-gray-50 shadow-2xl animate-bounce
           fixed right-4 bottom-4 p-3 focus:bg-transparent inline-block  bg-gradient-to-t"
          onClick={() => (setOpenCart(!openCart))}
        >
          <HiOutlineShoppingBag fontSize={40} color='grey' />
          <div className="absolute top-0 -right-1 bg-red-600 rounded-full h-3 w-3"></div>
        </div>
      }

      <div className="sm:ml-32 sm:mr-108">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full flex flex-row justify-center flex-wrap">
          {foodItems.map((item) => (
            <FoodItem data={item} key={item.id} categoryId={category.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
