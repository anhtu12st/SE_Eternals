import React from 'react';
import { useSelector } from 'react-redux';
import FoodSlider from './FoodSlider';
import SearchBox from './SearchBox';

const Header = () => {
  const { category } = useSelector((state) => state.category);

  return (
    <div className="pt-4 px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Choose Category</h1>
        <SearchBox />
      </div>

      <div className="mb-8">
        <FoodSlider />
      </div>

      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-medium">{category.title}</h2>
        <p className="text-white-2">12 Coffees Result</p>
      </div>
    </div>
  );
};

export default Header;
