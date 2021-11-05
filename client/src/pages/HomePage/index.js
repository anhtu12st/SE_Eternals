import { useSelector } from 'react-redux';
import {
  Cart, FoodItem, Navbar, Header,
} from '../../components';
import { data } from '../../data';

const HomePage = () => {
  const { category } = useSelector((state) => state.category);
  console.log('Category: ', category);
  return (
    <div className="flex">
      <div className="w-1/12 border-r-2">
        <Navbar />
      </div>
      <div className="w-8/12 border-r-2">
        <Header />
        <div className="grid grid-cols-3">
          {data[category.id - 1].items.map((item) => (
            <FoodItem data={item} key={item.id} categoryId={category.id} />
          ))}
        </div>
      </div>
      <div className="w-3/12 border-r-2">
        <Cart />
      </div>
    </div>
  );
};

export default HomePage;
