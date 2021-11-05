/* eslint-disable */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import {
  Cart, FoodItem, Navbar, Header,
} from '../../components';
import { data } from '../../data';

const HomePage = () => {
  const { category } = useSelector((state) => state.category);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedRight: (e) => {
      if (!openCart && e.initial[0] > 80 || e.velocity < 1) return;

      if (openCart) {
        return setOpenCart(false);
      }

      if (!openNavbar) {
        return setOpenNavbar(true);
      }
    },
    onSwipedLeft: (e) => {
      if (!openNavbar && e.initial[0] < 300 || e.velocity < 1) return;

      if (openNavbar) {
        return setOpenNavbar(false);
      }

      if (!openCart) {
        return setOpenCart(true);
      }
    },
  });

  return (
    <div {...handlers} className='overflow-x-hidden bg-gray-100' >
      <div className={`${openNavbar ? 'translate-x-0' : '-translate-x-full'}
        w-32 fixed h-screen left-0 sm:translate-x-0 bg-white
        transform top-0 overflow-auto ease-in-out transition-all duration-300 z-30
      `}><Navbar /></div>

      <div className={`${openCart ? 'translate-x-0' : 'translate-x-full'} 
        max-w-108 fixed h-screen right-0 sm:translate-x-0 sm:w-108 flex
        transform top-0 overflow-auto ease-in-out transition-all duration-300 z-30
      `}><Cart /></div>

      <div
        className="sm:hidden fixed right-4 bottom-4 p-3 focus:bg-transparent inline-block rounded-full bg-gradient-to-t"
        onClick={() => (setOpenCart(!openCart))}
      >
        <FaShoppingCart fontSize={50} color='grey' />
      </div>

      {(openNavbar || openCart) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => {
            setOpenNavbar(false);
            setOpenCart(false);
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
      )}

      <div className="sm:ml-32 sm:mr-108">
        <div className="w-full">
          <Header setOpenNavbar={setOpenNavbar} openNavbar={openNavbar} />
        </div>
        <div className="w-full flex flex-row justify-center flex-wrap">
          {data[category.id - 1].items.map((item) => (
            <FoodItem data={item} key={item.id} categoryId={category.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
