
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

export const fetchSuccess = response => {
  return {
    type: 'FETCH_SUCCESS',
    response
  }
}

export const fetchAssessments = () => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch('https://api.traitify.com/v1/assessments', {
      method: 'GET',
      body: JSON.stringify({
  "deck_id": "career-deck"
}),
      headers: {
        'Authorization': 'Basic 4b8956110ae47c2becce0a8318:x',
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
    .then(parsedResponse => fetchSuccess(parsedResponse))
    .catch(error => console.log(error))
  }
}
