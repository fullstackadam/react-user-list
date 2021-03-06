import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import { addUser } from './actions/users';
import setTextFilter from './actions/filters';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';

const store = configureStore();

for (let i = 0; i < 3; i++) {
  store.dispatch(addUser({ 
    firstName: 'Joe' + i,
    lastName: 'McMahon',
    address: '123 Fake Street', 
    city: 'City', 
    state: 'CO',
    zip: '11111',
  }));
  store.dispatch(
    addUser(
      { 
        firstName: 'George' + i,
        lastName: 'Jefferson',
        address: '231 Fake Street', 
        city: 'East Side', 
        state: 'CO',
        zip: '22222',
      }
    )
  );
}


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));