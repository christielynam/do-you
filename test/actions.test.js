import * as action from '../lib/actions';
import mockPersonalities from '../test-helpers/mockPersonalityData.js';
import mockSlides from '../test-helpers/mockAssessmentSlides.js';
import mockResults from '../test-helpers/mockAssessmentResults.js';
import mockTests from '../test-helpers/mockTestsData.js';
import fetchMock from 'fetch-mock';

// import publicKey from '../utils/keys';
// import secretKey from '../utils/keys';

describe('fetchHasErred', () => {
  it('fetchHasErred should return a boolean', () => {
    const fetchHasErredTrue = {
      type: 'FETCH_HAS_ERRED',
      hasErred: true
    }
    expect(action.fetchHasErred(true)).toEqual(fetchHasErredTrue)

    const fetchHasErredFalse = {
      type: 'FETCH_HAS_ERRED',
      hasErred: false
    }

    expect(action.fetchHasErred(false)).toEqual(fetchHasErredFalse)
  })
})

describe('fetchIsLoading', () => {
  it('fetchIsLoading should return a boolean', () => {
    const fetchIsLoadingTrue = {
      type: 'FETCH_IS_LOADING',
      isLoading: true
    }
    expect(action.fetchIsLoading(true)).toEqual(fetchIsLoadingTrue)

    const fetchIsLoadingFalse = {
      type: 'FETCH_IS_LOADING',
      isLoading: false
    }
    expect(action.fetchIsLoading(false)).toEqual(fetchIsLoadingFalse)
  })
})

describe('fetchAssessmentSuccess', () => {
  it('should return the assessment object', () => {
    const assessmentObj = {
      id: 'c2992ef2-c4b1-4594-a3b5-bf219957c3d8',
      deck_id: 'introver-extrovert'
    }
    const expectedAction = {
      type: 'FETCH_ASSESSMENT_SUCCESS',
      fetchedAssessment: assessmentObj
    }
    expect(action.fetchAssessmentSuccess(assessmentObj)).toEqual(expectedAction)
  })
})

describe('fetchPersonalitiesSuccess', () => {
  it('should return an array of fetched personality types', () => {
    const personalities = {
      type: 'FETCH_PERSONALITIES_SUCCESS',
      fetchedPersonalities: mockPersonalities
    }
    expect(action.fetchPersonalitiesSuccess(mockPersonalities)).toEqual(personalities)
  })
})

describe('displayAssessmentSuccess', () => {
  it('should return an array of assessment slides', () => {
    const assessmentSlides = {
      type: 'DISPLAY_ASSESSMENT_SUCCESS',
      assessmentSlides: mockSlides
    }
    expect(action.displayAssessmentSuccess(mockSlides)).toEqual(assessmentSlides)
  })
})

describe('displayResultsSuccess', () => {
  it('should return assessment results object', () => {
    const assessmentResults = {
      type: 'DISPLAY_RESULTS_SUCCESS',
      assessmentResults: mockResults
    }
    expect(action.displayResultsSuccess(mockResults)).toEqual(assessmentResults)
  })
})

describe('storeUser', () => {
  it('should return a new user object', () => {
    const mockUser = [{
      id: '6',
      name: 'Bo',
      email: 'bo@bo.com',
      password: 'bo'
    }]
    const user = {
      type: 'STORE_USER',
      user: Object.assign({}, mockUser[0])
    }
    expect(action.storeUser(mockUser)).toEqual(user)
  })
})

describe('storeTests', () => {
  it('should return a tests array', () => {
    const tests = {
      type: 'STORE_TESTS',
      tests: mockTests
    }
    expect(action.storeTests(mockTests)).toEqual(tests)
  })
})

describe('removeUserFromStore', () => {
  it('should remove a user from store', () => {
    const removeUser = {
      type: 'REMOVE_USER',
      user: null
    }
    expect(action.removeUserFromStore()).toEqual(removeUser)
  })
})

describe('removeTestsFromStore', () => {
  it('should remove tests from store', () => {
    const removeTests = {
      type: 'REMOVE_TESTS',
      tests: null
    }
    expect(action.removeTestsFromStore()).toEqual(removeTests)
  })
})

describe('removeTestResultsFromStore', () => {
  it('should remove test results from store', () => {
    const removeResults = {
      type: 'REMOVE_TEST_RESULTS',
      assessmentResults: null
    }
    expect(action.removeTestResultsFromStore()).toEqual(removeResults)
  })
})

describe('removeSlidesFromStore', () => {
  it('should remove slides from store', () => {
    const removeSlides = {
      type: 'REMOVE_SLIDES',
      assessmentSlides: []
    }
    expect(action.removeSlidesFromStore()).toEqual(removeSlides)
  })
})

describe('removeFetchedAssessment', () => {
  it('should remove an assessment from store', () => {
    const removeAssessment = {
      type: 'REMOVE_FETCHED_ASSESSMENT',
      fetchedAssessment: {}
    }
    expect(action.removeFetchedAssessment()).toEqual(removeAssessment)
  })
})
