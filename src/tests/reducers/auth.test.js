import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for Login', () => {
  const uid = '123456789'
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(uid);
});

test('should clear uid for Logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({ uid: 'anything'}, action);
  expect(state).toEqual({});
});