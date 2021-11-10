import Axios from './Axios';

export const SearchAPI = {
  searchFood: (searchText) => Axios.get(`/search-food/${searchText}`),
};
