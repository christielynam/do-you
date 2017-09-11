export const hasErred = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_HAS_ERRED':
      return action.hasErred

    default:
      return state
  }
}

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_IS_LOADING':
      return action.isLoading

    default:
      return state
  }
}

export const fetchedData = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.response

    default:
      return state
  }
}
