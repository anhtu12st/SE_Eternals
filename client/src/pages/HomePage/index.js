import { Cart } from '../../components';

const HomePage = () => (
  <div className='flex'>
    <div className='w-1/12 border-r-2'>Navbar</div>
    <div className='w-8/12 border-r-2'>Main</div>
    <div className='w-3/12 border-r-2'>
      <Cart />
    </div>
  </div>
);

export default HomePage;
