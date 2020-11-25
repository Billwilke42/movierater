export const getRating = async (imdb_id) => {
  const url = `http://localhost:3001/movie/${imdb_id}/ratings`
  const response = await fetch(url)
  if(response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('That didn\'t work')
  }
}