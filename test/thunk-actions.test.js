import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as action from '../lib/actions'

import mockPersonalities from '../test-helpers/mockPersonalityData.js';
import mockSlides from '../test-helpers/mockAssessmentSlides.js';
import mockResults from '../test-helpers/mockAssessmentResults.js';
import mockTests from '../test-helpers/mockTestsData.js'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('fetchAssessments async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('creates FETCH_ASSESSMENT_SUCCESS when fetching assessments is done', () => {
    const mockAssessmentData = {
    id: "3483dede-e9f2-4fd6-a6f1-b3f21f1c274d",
    deck_id: "persuasion",
    completed_at: null,
    created_at: 1505916240478,
    locale_key: "en-US",
    profile_id: "3c8157a0-8314-4591-a660-60ec449953c7",
    recommendation_id: null
    }

    fetchMock.post('https://api.traitify.com/v1/assessments', {
    status: 201,
    body: mockAssessmentData
    })

    expect(fetchMock.routes[0].method).toEqual('POST')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockAssessmentData)

    const store = mockStore()
    store.dispatch(action.fetchAssessments('persuasion'))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('https://api.traitify.com/v1/assessments')).toEqual(true)
    expect(fetchMock.routes[0].response.body).toEqual(mockAssessmentData)
  })
})

describe('fetchPersonalities async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('creates FETCH_PERSONALITIES_SUCCESS when fetching personalities is done', () => {

    fetchMock.get('https://api.traitify.com/v1/decks', {
    status: 200,
    body: mockPersonalities
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockPersonalities)

    const store = mockStore()
    store.dispatch(action.fetchPersonalities())

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('https://api.traitify.com/v1/decks')).toEqual(true)
    expect(fetchMock.routes[0].response.body).toEqual(mockPersonalities)

  })
})

describe('displayAssessment async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('creates DISPLAY_ASSESSMENT_SUCCESS when fetching assessments is done', () => {

    const testId = '8fc0775a-09fd-45c7-bed7-8c8d95b8c466'

    fetchMock.get(`https://api.traitify.com/v1/assessments/${testId}/slides`, {
    status: 200,
    body: mockSlides
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockSlides)

    const store = mockStore()
    store.dispatch(action.displayAssessment(testId))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('https://api.traitify.com/v1/assessments/8fc0775a-09fd-45c7-bed7-8c8d95b8c466/slides')).toEqual(true)
    expect(fetchMock.routes[0].response.body).toEqual(mockSlides)
  })
})

describe('updateSlideResponse async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('updates slide response in traitify datbase', () => {
    const testId = '8fc0775a-09fd-45c7-bed7-8c8d95b8c466'
    const slideObject = {
        id: "642c2cf7-b626-45bf-8b53-2f9f929d4981",
        position: 1,
        caption: "Working with Tools",
        image_desktop: "https://cdn.traitify.com/slides/0afb81c6-5f25-4143-bacc-903bcf454802_desktop",
        image_desktop_retina: "https://cdn.traitify.com/slides/6e8c1c80-ced9-44e9-9122-251d065ca206_desktop_retina",
        response: true,
        completed_at: 1505174783361,
        created_at: 1505174080624,
        focus_x: 79,
        focus_y: 53
    }

    fetchMock.put(`https://api.traitify.com/v1/assessments/${testId}/slides/${slideObject.id}`, {
    status: 200,
    body: JSON.stringify({
            id: slideObject.id,
            response: slideObject.response,
            time_taken: 2000,
          })
    })

    expect(fetchMock.routes[0].method).toEqual('PUT')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(JSON.stringify({
            id: slideObject.id,
            response: slideObject.response,
            time_taken: 2000,
          }))

    const store = mockStore()
    store.dispatch(action.updateSlideResponse(slideObject, testId))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('https://api.traitify.com/v1/assessments/8fc0775a-09fd-45c7-bed7-8c8d95b8c466/slides/642c2cf7-b626-45bf-8b53-2f9f929d4981')).toEqual(true)
    expect(fetchMock.routes[0].response.status).toEqual(200)
  })
})

describe('fetchResults async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('creates DISPLAY_RESULTS_SUCCESS when fetching results is done', () => {

    const testId = 'e24a0756-e26d-4deb-a712-f4b36fa70934'

    fetchMock.get(`https://api.traitify.com/v1/assessments/${testId}?data=blend,types,career_matches`, {
    status: 200,
    body: mockResults
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockResults)

    const store = mockStore()
    store.dispatch(action.fetchResults(testId))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('https://api.traitify.com/v1/assessments/e24a0756-e26d-4deb-a712-f4b36fa70934?data=blend,types,career_matches')).toEqual(true)
    expect(fetchMock.routes[0].response.body).toEqual(mockResults)
  })
})

describe('fetchAllTests async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should fetch all tests under one user id in backend database', () => {

    const userId = 6

    fetchMock.get(`http://localhost:3000/api/v1/results/${userId}`, {
    status: 200,
    body: mockTests
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockTests)

    const store = mockStore()
    store.dispatch(action.fetchAllTests(userId))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('http://localhost:3000/api/v1/results/6')).toEqual(true)
    expect(fetchMock.routes[0].response.body).toEqual(mockTests)
  })
})

describe('fetchUserFromDB async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('fetches user from backend database', () => {
    const email = 'bo@bo.com'
    const password = 'bo'

    fetchMock.post('http://localhost:3000/api/v1/users', {
    status: 200,
    body: JSON.stringify({ email, password })
    })

    expect(fetchMock.routes[0].method).toEqual('POST')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(JSON.stringify({ email, password }))

    const store = mockStore()
    store.dispatch(action.fetchUserFromDB(email, password))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('http://localhost:3000/api/v1/users')).toEqual(true)
  })
})

describe('fetchUserFromDB async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('fetches user from backend database', () => {
    const email = 'bo@bo.com'
    const password = 'bo'

    fetchMock.post('http://localhost:3000/api/v1/users', {
    status: 200,
    body: JSON.stringify({ email, password })
    })

    expect(fetchMock.routes[0].method).toEqual('POST')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(JSON.stringify({ email, password }))

    const store = mockStore()
    store.dispatch(action.fetchUserFromDB(email, password))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('http://localhost:3000/api/v1/users')).toEqual(true)
  })
})

describe('addUserToDB async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('adds user to backend database', () => {
    const name = 'lily wood'
    const email = 'lily@lily.com'
    const password = 'lily'

    fetchMock.post('http://localhost:3000/api/v1/users/new', {
    status: 200,
    body: JSON.stringify({ name, email, password })
    })

    expect(fetchMock.routes[0].method).toEqual('POST')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(JSON.stringify({ name, email, password }))

    const store = mockStore()
    store.dispatch(action.addUserToDB(name, email, password))

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.called('http://localhost:3000/api/v1/users/new')).toEqual(true)
  })
})
