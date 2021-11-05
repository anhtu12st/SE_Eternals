import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="flex justify-between items-center sm:w-1/2 border-2 bg-white border-white-1 rounded-lg p-4">
      <input
        className="focus:outline-none"
        type="text"
        placeholder="Search category or menu..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="text-white-2 text-2xl">
        <FiSearch />
      </div>
    </div>
  );
};

export default SearchBox;
