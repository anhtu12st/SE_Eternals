import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import store from './redux/store';

import { HomePage, PaymentPage } from './pages';
import Layout from './components/Layout';

const routes = [
  {
    path: '/category/:categoryName',
    component: HomePage,
  },
  {
    path: '/payment',
    component: PaymentPage,
  },
];

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map((page) => (
          <Route
            key={page.path}
            exact
            path={page.path}
            // eslint-disable-next-line react/jsx-props-no-spreading
            render={(props) => (<Layout><page.component {...props} /></Layout>)}
          />
        ))}
        <Redirect to="/category/drink" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
