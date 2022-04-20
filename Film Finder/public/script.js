const tmdbKey = '41718f69aab571ad1a926e583b044721';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint ='/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      console.log(genres);
    }
  } catch(error) {
    console.log(error);
  };