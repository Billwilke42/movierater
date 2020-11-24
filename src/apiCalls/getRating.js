export const getRating = async (imdb_ID) => {
  const url = `http://localhost:3001/api/v1/movie/${imdb_ID}/ratings`
  const response = await fetch(url)
  if(response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('That didn\'t work')
  }
}