export const addRating = async (imdbID, rating) => {
  const url = 'http://localhost:3001/api/v1/ratings'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      imdb_ID: imdbID,
      rating: rating
    })
  })
  console.log(response)
  if(response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
}