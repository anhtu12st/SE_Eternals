import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { searchFood, searchActions } from '../../redux/search/searchSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    dispatch(searchFood(searchText));
    dispatch(searchActions.setSearchText(searchText));
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-between items-center sm:w-1/2 border-2 bg-white border-white-1 rounded-lg p-4">
      <input
        className="focus:outline-none w-1/2"
        type="text"
        placeholder="Search category or menu..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="text-white-2 text-2xl"
        onClick={handleSearch}
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBox;
