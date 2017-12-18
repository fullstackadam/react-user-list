import usersReducer from '../../reducers/users';
import users from '../fixtures/users';
import uuid from 'uuid';
import moment from 'moment';

test('should set default state', () => {
  const state = usersReducer(
    undefined,
    { type: '@@INIT' }
  );

  expect(state).toEqual([]);
});

test('should remove user by id', () => {
  const action = {
    type: 'REMOVE_USER',
    id: users[1].id
  };

  const state = usersReducer(
    users,
    action
  );

  expect(state).toEqual([users[0], users[2]]);
});

test('should not remove users if id not found', () => {
  const action = {
    type: 'REMOVE_USER',
    id: 'd'
  };

  const state = usersReducer(
    users,
    action
  );

  expect(state).toEqual([...users]);
});

test('should add a user', () => {
  const id = uuid();

  const user = {
    id,
    firstName: 'George',
    lastName: 'Jefferson',
    address: '444 Fake Ct', 
    city: 'Manhattan',
    state: 'NY',
    zip: '11222', 
    createdAt: moment(0)
  };

  const action = {
    type: 'ADD_USER',
    user
  };

  const state = usersReducer(
    users,
    action
  );

  expect(state).toEqual([...users, user]);
});

test('should edit a user', () => {
  const action = {
    type: 'EDIT_USER',
    id: 'c',
    updates: {
      address: '51 Forbidden Zone'
    }
  };

  const state = usersReducer(
    users,
    action
  );

  expect(state[2].address).toBe('51 Forbidden Zone');
});

test('should not edit user if user not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates: {
      address: '51 Forbidden Zone'
    }
  };
  
  const state = usersReducer(
    users,
    action
  );

  expect(state).toEqual([...users]);
});