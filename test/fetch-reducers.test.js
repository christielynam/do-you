import * as reducer from '../lib/reducers/';

describe('storing user', () => {
  it('should have a default state', () => {
    const defaultUser = null
    expect(reducer.user(undefined, defaultUser)).toEqual(defaultUser)
  })

  it('should remove a user', () => {
    const removedUser = null
    expect(reducer.user(undefined, removedUser)).toEqual(removedUser)
  })

  // it('should store a user successfully', () => {
  //   const user = {
  //     type: 'LOGIN_SUCCESS',
  //     user: {email: 'troll59910@aol.com', password: 'password'},
  //     isLoggedIn: true,
  //     id: 5
  //   }
  //
  //   const expectedResponse = {
  //     userInfo: {email: 'troll59910@aol.com', password: 'password'},
  //     isLoggedIn: true,
  //     user_id: 5
  //   }
  //
  //   expect(reducers.loginSuccess(undefined, user)).toEqual(expectedResponse)
  // })
})
