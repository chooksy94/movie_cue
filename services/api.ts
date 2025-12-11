// /*Handling API request*/
export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

//fetching the request details

export const fetchMovies = async ({ query } : { query: string}) => {
    //displaying search result in the search screen when queried in the searchbar
    const endpoint = query
    ? 'search/movie?query=${encodeURIComponent(query)}'
    :'/discover/movie?sort_by=popularity.desc';

//handling the response
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        //@ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }

    //extracting data from the response
    const data = await response.json();

    return data.results;
}



// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJiNmQ0NmQ5MTc2MzMwY2ZkNTQ1NTQ1NDhmOWEwMCIsIm5iZiI6MTc2NTMzMzM4OS43NDEsInN1YiI6IjY5MzhkOThkNGNkMWY3MmM0MmY4NzgyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CU7TJnuXnGKAmNNc3oTxKkFPrTp6kIh9eNO1b-rFjxI'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));