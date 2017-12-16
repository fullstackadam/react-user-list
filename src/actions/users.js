import uuid from 'uuid';
import moment from 'moment';

export const addUser = (
  { 
    firstName,
    lastName = '',
    address = '', 
    city, 
    state,
    zip = '', 
  } = {}
) => ({
  type: 'ADD_USER',
  user: {
    id: uuid(),
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    createdAt: moment()
  }
});

export const removeUser = ({ id } = {}) => ({
  type: 'REMOVE_USER',
  id
});

export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});
