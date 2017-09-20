import publicKey from '../utils/keys';
import secretKey from '../utils/keys';

export const fetchHasErred = bool => {
  return {
    type: 'FETCH_HAS_ERRED',
    hasErred: bool,
  }
}

export const fetchIsLoading = bool => {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool
  }
}

export const fetchAssessmentSuccess = fetchedAssessment => {
  return {
    type: 'FETCH_ASSESSMENT_SUCCESS',
    fetchedAssessment
  }
}

export const fetchPersonalitiesSuccess = fetchedPersonalities => {
  return {
    type: 'FETCH_PERSONALITIES_SUCCESS',
    fetchedPersonalities
  }
}

export const displayAssessmentSuccess = assessmentSlides => {
  return {
    type: 'DISPLAY_ASSESSMENT_SUCCESS',
    assessmentSlides
  }
}

export const displayResultsSuccess = assessmentResults => {
  return {
    type: 'DISPLAY_RESULTS_SUCCESS',
    assessmentResults
  }
}

export const storeUser = user => {
  return {
    type: 'STORE_USER',
    user: Object.assign({}, user[0])
  }
}

export const storeTests = tests => {
  return {
    type: 'STORE_TESTS',
    tests
  }
}

export const removeUserFromStore = () => {
  return {
    type: 'REMOVE_USER',
    user: null
  }
}

export const removeTestsFromStore = () => {
  return {
    type: 'REMOVE_TESTS',
    tests: null
  }
}

export const removeTestResultsFromStore = () => {
  return {
    type: 'REMOVE_TEST_RESULTS',
    assessmentResults: null
  }
}

export const fetchAssessments = (testType) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch('https://api.traitify.com/v1/assessments', {
      method: 'POST',
      body: JSON.stringify({ 'deck_id': testType }),
      headers: {
        'Authorization': `Basic ${secretKey}:x`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status !== 201) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .then(response => response.json())
    .then(parsedResponse => dispatch(fetchAssessmentSuccess(parsedResponse)))
    .catch(error => console.log(error))
  }
}

export const fetchPersonalities = () => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch('https://api.traitify.com/v1/decks', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .then(response => response.json())
    .then(parsedResponse => dispatch(fetchPersonalitiesSuccess(parsedResponse)))
    .catch(error => console.log(error))
  }
}

export const displayAssessment = (testId) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch(`https://api.traitify.com/v1/assessments/${testId}/slides`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .then(response => response.json())
    .then(parsedResponse => dispatch(displayAssessmentSuccess(parsedResponse)))
    .catch(error => console.log(error))
  }
}

export const updateSlideResponse = (slideObject, testId) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch(`https://api.traitify.com/v1/assessments/${testId}/slides/${slideObject.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: slideObject.id,
        response: slideObject.response,
        time_taken: 2000,
      }),
      headers: {
        'Authorization': `Basic ${publicKey}:x`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .catch(error => console.log(error))
  }
}

export const fetchResults = (testId) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    fetch(`https://api.traitify.com/v1/assessments/${testId}?data=blend,types,career_matches`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${publicKey}:x`
      }
    })
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .then(response => response.json())
    .then(parsedResponse => {
      if (parsedResponse.completed_at) {
        debugger;
        dispatch(displayResultsSuccess(parsedResponse))
      } else {
        dispatch(fetchAssessmentSuccess(Object.assign({}, { id: parsedResponse.id, deck_id: parsedResponse.deck_id })))
        dispatch(displayAssessmentSuccess(parsedResponse.slides))
      }
    })
    .catch(error => console.log(error))
  }
}

export const fetchAllTests = (userId) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    fetch(`http://localhost:3000/api/v1/results/${userId}`)
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .then(results => results.json())
    .then(response => dispatch(storeTests(response)))
    .catch( error => console.log(error))
  }
}

export const fetchUserFromDB = (email, password) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true))
      } else {
        dispatch(fetchIsLoading(false))
        return response
      }
    })
    .then(results => results.json())
    .then(response => dispatch(storeUser(response)))
    .catch( error => console.log(error))
  }
}

export const addUserToDB = (name, email, password) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    fetch('http://localhost:3000/api/v1/users/new', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password })
    })
    // .then(response => {
    //   if (response.status !== 200) {
    //     dispatch(fetchHasErred(true))
    //   } else {
    //     dispatch(fetchIsLoading(false))
    //     return response
    //   }
    // })
    .then(results => results.json())
    .then(response => dispatch(storeUser(response)))
    .catch( error => console.log(error))
  }
}
