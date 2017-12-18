import { addUser, editUser, removeUser } from '../../actions/users';
import moment from 'moment';

test('should set up remove user action object', () => {
  const action = removeUser({ id: '1' });

  expect(action).toEqual({
    type: 'REMOVE_USER',
    id: '1'
  });
});

test('should set up edit user action object', () => {
  const updates = {
    address: '32100 Nil Street'
  };

  const action = editUser('1', { updates });

  expect(action).toEqual({
    type: 'EDIT_USER',
    id: '1',
    updates: { 
      updates
    }
  });
});

test('should set up add user action object with provided values', () => {
  const userData = {
    firstName: 'Adam',
    lastName: 'McMahon',
    address: '123 Fake Street', 
    city: 'Denver',
    state: 'CO',
    zip: '00123', 
  };

  const action = addUser(userData);

  expect(action).toEqual({
    type: 'ADD_USER',
    user: {
      ...userData,
      id: expect.any(String),
      createdAt: expect.any(moment)
    }
  });
});