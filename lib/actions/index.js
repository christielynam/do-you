

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

export const fetchPersonalities = () => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch('https://api.traitify.com/v1/decks', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic c967d0cf2ddee5a7b3485c8b86:x',
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
    .then(parsedResponse => console.log(parsedResponse))
    .catch(error => console.log(error))
  }
}
