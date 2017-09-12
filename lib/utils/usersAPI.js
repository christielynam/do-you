const fetchUserFromDB = (email, password) => {

  return fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({  email, password })
  })
  .then(results => results.json())
  .then(response => console.log('user found', response))
}



module.exports = { fetchUserFromDB }
