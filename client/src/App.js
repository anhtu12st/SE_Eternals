import { store } from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/payment" component={PaymentPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
