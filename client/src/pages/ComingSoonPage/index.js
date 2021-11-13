import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { globalActions } from '../../redux/global/globalSlice';

function ComingSoonPage() {
  const { pathname } = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const openCart = useSelector((state) => state.global.openCart);

  const title = `${pathname[1].toUpperCase()}${pathname.slice(2)}`;
  return (
    <>
      {items.length > 0 && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="sm:hidden bg-gray-50 shadow-2xl animate-bounce rounded-lg
           fixed right-4 bottom-4 p-3 focus:bg-transparent inline-block  bg-gradient-to-t"
          onClick={() => dispatch(globalActions.setOpenCart(!openCart))}
        >
          <HiOutlineShoppingBag fontSize={40} color="grey" />
          <div className="absolute top-0 -right-1 bg-red-600 rounded-full h-3 w-3" />
        </div>
      )}
      <div className="h-screen sm:ml-32 sm:mr-108 bg-white flex items-center justify-center">
        <div>
          <div className=" text-2xl text-brown-1 font-semibold">{`${title} is coming soon`}</div>
          <div className="my-2 flex justify-center">
            <button
              type="button"
              className="bg-brown-4 hover:bg-brown-2 text-white font-bold py-2 px-3 rounded-lg"
              onClick={() => history.push('/home')}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

ComingSoonPage.propTypes = {};

export default ComingSoonPage;
