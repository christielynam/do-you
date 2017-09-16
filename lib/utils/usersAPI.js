export const storeTestInfo = (test_id, deck_id, user_id) => {

  return fetch('http://localhost:3000/api/v1/results', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ test_id, deck_id, user_id })
  })
  .then(results => results.json())
  .then(response => console.log('test stored', response))
}
