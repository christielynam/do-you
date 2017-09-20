import * as reducer from '../lib/reducers/database-reducers';
import mockTests from '../test-helpers/mockTestsData.js';


describe('storing user', () => {
  it('should have a default state', () => {
    const defaultUser = null
    expect(reducer.user(undefined, {})).toEqual(defaultUser)
  })

  it('should remove a user', () => {
    const removeUserAction = {
      type: 'REMOVE_USER',
      user: null
    }
    const removedUser = null
    expect(reducer.user(undefined, removeUserAction)).toEqual(removedUser)
  })

  it('should store a user successfully', () => {
    const userAction = {
      type: 'STORE_USER',
      user: {
        id: 6,
        name: 'bo',
        email: 'bo@bo.com',
        password: 'bo',
        created_at: '2017-09-19T00:58:18.083Z',
        updated_at: '2017-09-19T00:58:18.083Z'
      }
    }

    const expectedResponse = {
        id: 6,
        name: 'bo',
        email: 'bo@bo.com',
        password: 'bo',
        created_at: '2017-09-19T00:58:18.083Z',
        updated_at: '2017-09-19T00:58:18.083Z'
    }

    expect(reducer.user(undefined, userAction)).toEqual(expectedResponse)
  })
})

describe('storing tests', () => {
  it('should have a default state', () => {
    const defaultTests = null
    expect(reducer.tests(undefined, {})).toEqual(defaultTests)
  })

  it('should remove tests', () => {
    const removeTestsAction = {
      type: 'REMOVE_TESTS',
      tests: null
    }
    const removedTests = null
    expect(reducer.tests(undefined, removeTestsAction)).toEqual(removedTests)
  })

  it('should store tests successfully', () => {
    const testAction = {
      type: 'STORE_TESTS',
      tests: mockTests
    }
    expect(reducer.tests(undefined, testAction)).toEqual(mockTests)
  })
})
