import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import FoodSlider from './FoodSlider';
import SearchBox from './SearchBox';
import { globalActions } from '../../redux/global/globalSlice';
import { data } from '../../data';

const Header = () => {
  const dispatch = useDispatch();
  const openNavbar = useSelector((state) => state.global.openNavbar);
  const { category } = useSelector((state) => state.category);
  const { searchText } = useSelector((state) => state.search);
  const { foundItems } = useSelector((state) => state.search);

  return (
    <div className="pt-4 px-8">
      <div className="flex justify-between items-center mb-8">
        <button type="button" className="focus:bg-transparent pr-2 sm:hidden inline-block" onClick={() => (dispatch(globalActions.setOpenNavbar(!openNavbar)))}>
          <GiHamburgerMenu fontSize={30} />
        </button>
        <h1 className="hidden sm:block text-2xl font-bold">Choose Category</h1>
        <SearchBox />
      </div>

      <div className="mb-8">
        <FoodSlider />
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-medium">{searchText || category.title }</h2>
        {searchText ? (<p className="text-white-2">{`${foundItems.length} Results`}</p>) : <p className="text-white-2">{`${data[category.id - 1].items.length} Results`}</p>}
      </div>
    </div>
  );
};

export default Header;
