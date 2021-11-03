import React from 'react';
import FoodSlider from './FoodSlider';
import SearchBox from './SearchBox';

const Header = () => (
  <div className="pt-4 px-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">Choose Category</h1>
      <SearchBox />
    </div>

    <div className="mb-8">
      <FoodSlider />
    </div>

    <div className="flex justify-between mb-8">
      <h2 className="text-2xl font-medium">Coffee Menu</h2>
      <p className="text-white-2">12 Coffees Result</p>
    </div>
  </div>
);

export default Header;
