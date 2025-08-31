export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNmZDQyNzRiMmM2OWYyOWMwODFjMmEwNzQyMDhiZiIsIm5iZiI6MTc1NjIyNDU3OS4wMzgsInN1YiI6IjY4YWRkYzQzYWM4YjY1MDdhNThkMmM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y1f3JTOaw73D4mLAg20Wkbv5wLhlS6dQIForajkNi68",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNmZDQyNzRiMmM2OWYyOWMwODFjMmEwNzQyMDhiZiIsIm5iZiI6MTc1NjIyNDU3OS4wMzgsInN1YiI6IjY4YWRkYzQzYWM4YjY1MDdhNThkMmM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y1f3JTOaw73D4mLAg20Wkbv5wLhlS6dQIForajkNi68`,
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_CONFIG.API_KEY}`, // use your v4 token here
        },
    });

    if (!response.ok) {
        throw new Error(`Could not fetch movie data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};


export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try {
         const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
             method: 'GET',
             headers: TMDB_CONFIG.headers,
         });

         if (!response.ok) {
             throw new Error(`Could not fetch movie data: ${response.status} ${response.statusText}`);
         }

         const data = await response.json();

         return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
