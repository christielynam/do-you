export const user = (state = null, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return action.user

    default:
      return state
  }
}
