/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { Cart, Navbar } from '..';
import { globalActions } from '../../redux/global/globalSlice';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { openNavbar, openCart } = useSelector((state) => state.global);

  const handlers = useSwipeable({
    onSwipedRight: (e) => {
      if (!openCart && e.initial[0] > 80 || e.velocity < 1) return;

      if (openCart) {
        return dispatch(globalActions.setOpenCart(false));
      }

      if (!openNavbar) {
        return dispatch(globalActions.setOpenNavbar(true));
      }
    },
    onSwipedLeft: (e) => {
      if (!openNavbar && e.initial[0] < 300 || e.velocity < 1) return;

      if (openNavbar) {
        return dispatch(globalActions.setOpenNavbar(false));
      }

      if (!openCart) {
        return dispatch(globalActions.setOpenCart(true));
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
        w-full fixed h-screen right-0 sm:translate-x-0 sm:w-108 flex
        transform top-0 overflow-auto ease-in-out transition-all duration-300 z-30
      `}><Cart /></div>

      {(openNavbar || openCart) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => {
            dispatch(globalActions.setOpenNavbar(false));
            dispatch(globalActions.setOpenCart(false));
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
      )}

      {children}
    </div>
  );
};

export default Layout;
