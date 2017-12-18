import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: ''
  });
});

test('should set text filter', () => {
  const text = 'Joe';

  const state = filtersReducer(
    undefined,
    { type: 'SET_TEXT_FILTER', text }
  );

  expect(state.text).toBe(text);
});