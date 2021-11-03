import { Cart, Header, Navbar, FoodItem } from '../../components';

const HomePage = () => (
  <div className="flex">
    <div className="w-1/12 border-r-2">
      <Navbar />
    </div>
    {/* <div className="w-1/12 border-r-2">
      <MobileNavbar />
    </div> */}
    <div className="w-8/12 border-r-2">
      <Header />
      <FoodItem />
    </div>
    <div className="w-3/12 border-r-2">
      <Cart />
    </div>
  </div>
);

export default HomePage;
