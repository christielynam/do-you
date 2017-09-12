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

export const fetchedAssessment = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ASSESSMENT_SUCCESS':
      return action.fetchedAssessment

    default:
      return state
  }
}

export const fetchedPersonalities = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PERSONALITIES_SUCCESS':
      return action.fetchedPersonalities

    default:
      return state
  }
}

export const assessmentSlides = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_ASSESSMENT_SUCCESS':
      return action.assessmentSlides

    default:
      return state
  }
}
