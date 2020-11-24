export const getRating = async (imdbID) => {
  const url = `http://localhost:3001/api/v1/movie/${imdbID}/ratings`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
  if(response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('That didn\'t work')
  }
}