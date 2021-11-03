import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import { HomePage, PaymentPage } from './pages';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/payment" component={PaymentPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
