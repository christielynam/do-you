const fetchUserFromDB = (email, password) => {

  return fetch(api/v1/users, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  email: email,
      password: password })
  })
  .then(results => results.json())
  .then(response => response)
}



module.exports = { fetchUserFromDB }
