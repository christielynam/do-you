import * as reducer from '../lib/reducers/fetch-reducers';
import mockPersonalities from '../test-helpers/mockPersonalityData.js';
import mockSlides from '../test-helpers/mockAssessmentSlides.js';
import mockResults from '../test-helpers/mockAssessmentResults.js';


describe('fetch has erred', () => {
  it('should have a default state', () => {
    const defaultState = false
    expect(reducer.hasErred(undefined, {})).toEqual(defaultState)
  })

  it('should set state to true if fetch erred', () => {
    const hasErredAction = {
      type: 'FETCH_HAS_ERRED',
      hasErred: true
    }
    expect(reducer.hasErred(undefined, hasErredAction)).toEqual(true)
  })
})

describe('fetch is loading', () => {
  it('should have a default state', () => {
    const defaultState = false
    expect(reducer.isLoading(undefined, {})).toEqual(defaultState)
  })

  it('should set state to true if fetch is loading', () => {
    const isLoadingAction = {
      type: 'FETCH_IS_LOADING',
      isLoading: true
    }
    expect(reducer.isLoading(undefined, isLoadingAction)).toEqual(true)
  })
})

describe('fetching an assessment', () => {
  it('should have a default state', () => {
    const defaultState = {}
    expect(reducer.fetchedAssessment(undefined, {})).toEqual(defaultState)
  })

  it('should remove a fetched assessment', () => {
    const removeAction = {
      type: 'REMOVE_FETCHED_ASSESSMENT',
      fetchedAssessment: {}
    }
    expect(reducer.fetchedAssessment(undefined, removeAction)).toEqual({})
  })

  it('should fetch an assessment successfully', () => {
    const fetchedAssessmentAction = {
      type: 'FETCH_ASSESSMENT_SUCCESS',
      fetchedAssessment: {
        id: "e34c6cbb-9f6d-4008-8e9f-cdbce5ffcb80",
        deck_id: "introvert-extrovert",
        completed_at: null,
        created_at: 1505913897188,
        locale_key: "en-US",
        profile_id: "b93213c3-7be3-4015-807a-a67f1d68a8b1",
        recommendation_id: null
      }
    }

    const expectedResponse = {
      id: "e34c6cbb-9f6d-4008-8e9f-cdbce5ffcb80",
      deck_id: "introvert-extrovert",
      completed_at: null,
      created_at: 1505913897188,
      locale_key: "en-US",
      profile_id: "b93213c3-7be3-4015-807a-a67f1d68a8b1",
      recommendation_id: null
    }

    expect(reducer.fetchedAssessment(undefined, fetchedAssessmentAction)).toEqual(expectedResponse)
  })
})

describe('fetch personalities', () => {
  it('should have a default state', () => {
    const defaultState = []
    expect(reducer.fetchedPersonalities(undefined, {})).toEqual(defaultState)
  })

  it('should fetch personalities successfully', () => {
    const fetchPersonalitiesAction = {
      type: 'FETCH_PERSONALITIES_SUCCESS',
      fetchedPersonalities: mockPersonalities
    }
    expect(reducer.fetchedPersonalities(undefined, fetchPersonalitiesAction)).toEqual(mockPersonalities)
  })
})

describe('fetch assessment slides', () => {
  it('should have a default state', () => {
    const defaultState = []
    expect(reducer.assessmentSlides(undefined, {})).toEqual(defaultState)
  })

  it('should remove slides successfully', () => {
    const removeSlides = {
      type: 'REMOVE_SLIDES',
      assessmentSlides: []
    }
    expect(reducer.assessmentSlides(undefined, removeSlides)).toEqual([])
  })

  it('should fetch slides successfully', () => {
    const slidesAction = {
      type: 'DISPLAY_ASSESSMENT_SUCCESS',
      assessmentSlides: mockSlides
    }
    expect(reducer.assessmentSlides(undefined, slidesAction)).toEqual(mockSlides)
  })
})

describe('fetch assessment results', () => {
  it('should have a default state', () => {
    expect(reducer.assessmentResults(undefined, {})).toEqual(null)
  })

  it('should remove results successfully', () => {
    const removeResults = {
      type: 'REMOVE_TEST_RESULTS',
      assessmentResults: null
    }
    expect(reducer.assessmentResults(undefined, removeResults)).toEqual(null)
  })

  it('should fetch results successfully', () => {
    const resultsAction = {
      type: 'DISPLAY_RESULTS_SUCCESS',
      assessmentResults: mockResults
    }
    expect(reducer.assessmentResults(undefined, resultsAction)).toEqual(mockResults)
  })
})
