import setTextFilter from '../../actions/filters';

test('should up set text filter action object', () => {
  const action = setTextFilter('Joe');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Joe'
  });
});

test('should set up set text filter action object with default values', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});