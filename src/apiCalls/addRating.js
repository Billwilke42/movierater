export const addRating = async (imdbID, thumbsUp, thumbsDown, movieTitle) => {
  const url = 'http://localhost:3001/ratings'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      imdb_id: imdbID,
      thumbs_up: thumbsUp,
      thumbs_down: thumbsDown,
      title: movieTitle
    })
  })
  if(response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
}