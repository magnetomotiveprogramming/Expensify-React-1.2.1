import configureMockStore from 'redux-mock-store';
import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
  const uid = '1234567890'
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
