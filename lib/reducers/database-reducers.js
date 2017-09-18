export const user = (state = null, action) => {
  switch (action.type) {

    case 'REMOVE_USER':
    return action.user

    case 'STORE_USER':
      return action.user

    default:
      return state
  }
}

export const tests = (state = null, action) => {
  switch (action.type) {
    case 'STORE_TESTS':
      return action.tests

    default:
      return state
  }
}
