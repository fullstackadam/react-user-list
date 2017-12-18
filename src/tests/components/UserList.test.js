import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure';
import { addUser } from '../../actions/users';
import UserList from '../../components/UserList';
import users from '../fixtures/users';

test('should render UserList with users', () => {
  const store = configureStore();

  store.dispatch(addUser(users[0]));
  store.dispatch(addUser(users[1]));
  store.dispatch(addUser(users[2]));

  const wrapper = shallow(
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});