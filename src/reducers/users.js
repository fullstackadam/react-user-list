const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      if (!action.user.firstName || !action.user.city || !action.user.state) {
        return state;
      } else {
        return state.concat(action.user);
      }
      break;
    case 'REMOVE_USER':
      return state.filter(({ id }) =>  id !== action.id);
      break;
    case 'EDIT_USER':
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};