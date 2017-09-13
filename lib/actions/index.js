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

export const fetchAssessments = () => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch('https://api.traitify.com/v1/assessments', {
      method: 'POST',
      body: JSON.stringify({ 'deck_id': 'career-deck' }),
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
    fetch(`https://api.traitify.com/v1/assessments/${testId}?data=blend,career_matches`, {
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
    .then(parsedResponse => dispatch(displayResultsSuccess(parsedResponse)))
    .catch(error => console.log(error))
  }
}
