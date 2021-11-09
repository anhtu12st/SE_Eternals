/* eslint-disable */
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Helmet } from 'react-helmet';

import {
  FoodItem, Header,
} from '../../components';
import { data } from '../../data';

const HomePage = () => {
  const { category } = useSelector((state) => state.category);
  const { items } = useSelector(state => state.cart)

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
            {data[category.id - 1].items.map((item) => (
              <FoodItem data={item} key={item.id} categoryId={category.id} />
            ))}
          </div>
        </div>
    </Fragment>
  );
};

export default HomePage;
