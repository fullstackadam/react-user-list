import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import { addUser } from './actions/users';
import setTextFilter from './actions/filters';
import Header from './components/Header';
import UserList from './components/UserList';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addUser({ firstName: 'Adam' }));
store.dispatch(addUser(
  { 
    firstName: 'Joe',
    lastName: 'McMahon',
    address: '123 Fake Street', 
    city: 'City', 
    state: 'CO',
    zip: '11111',
  }));
store.dispatch(
  addUser(
    { 
      firstName: 'George',
      lastName: 'Jefferson',
      address: '231 Fake Street', 
      city: 'East Side', 
      state: 'CO',
      zip: '22222',
    }
  )
);



const App = () => (
  <div>
    <Header />
    <UserList />
  </div>
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

store.dispatch(setTextFilter('j'));

ReactDOM.render(jsx, document.getElementById('app'));