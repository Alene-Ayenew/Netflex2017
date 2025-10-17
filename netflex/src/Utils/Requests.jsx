const API_KEY=process.env.REACT_APP_API_KEY;
const requests={
    fetchTreding:`/trending/all/week?api+key=${API_KEY}&language=en-us`,
    fetchNetflixOrginals:`/discover/tv?api+key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api+key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api+key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api+key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api+key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api+key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api+key=${API_KEY}&with_genres=90`,
    fetchTvShow:`/tv/popular?api+key=${API_KEY}&language=en-us&page=1`,
}