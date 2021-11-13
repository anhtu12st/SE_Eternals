import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { categoryActions } from '../../redux/category/categorySlice';
import { searchActions } from '../../redux/search/searchSlice';

const FoodItem = ({ imgUrl, title, id }) => {
  const history = useHistory();
  const { categoryName } = useParams();
  const { searchText } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChooseCategory = () => {
    dispatch(categoryActions.chooseCategory({ id, title }));
    dispatch(searchActions.clearSearchData());
    history.push(`/category/${title.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        style={{ height: '150px', width: '150px' }}
        type="button"
        className={`flex flex-col items-center justify-center rounded-xl bg-white text-2xl font-medium py-1 text-gray-900 
        hover:bg-brown-3 hover:text-brown-1 
        ${(categoryName === title.toLowerCase() && !searchText) && 'bg-brown-3 z-10 ring-2 ring-brown-1 text-brown-1'}
        m-1 sm:m-2 border`}
        id={id}
        onClick={handleChooseCategory}
      >
        <img className="w-2/3 h-2/3 rounded" src={imgUrl} alt="food" />
        <p className="text-base mt-2">{title}</p>
      </button>
    </div>
  );
};

FoodItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
};

FoodItem.defaultProps = {
  imgUrl: '',
  title: '',
};

export default FoodItem;
