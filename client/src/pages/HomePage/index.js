import { Cart, FoodItem } from '../../components';
import { data } from '../../data';

const HomePage = () => (
  <div className="flex">
    <div className="w-1/12 border-r-2">Navbar</div>
    <div className="w-8/12 border-r-2 grid grid-cols-3">
      {
        data.map((item) => (
          <FoodItem data={item} key={item.id} />
        ))
      }
    </div>
    <div className="w-3/12 border-r-2"><Cart /></div>

  </div>
);

export default HomePage;
