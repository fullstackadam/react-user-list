import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure';
import UserListItem from '../../components/UserListItem';
import users from '../fixtures/users';

test('should render UserListItem with user', () => {
  const store = configureStore();

  const wrapper = shallow(
    <Provider store={store}>
      <UserListItem {...users[0]} />
    </Provider>
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});