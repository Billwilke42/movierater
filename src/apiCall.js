export const getMovies = async (searchValue) => {
  const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${searchValue}&page=1&r=json`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
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