import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies =()=>{
     //Fetch Data From TMDB API AN UPDATE STORE.
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json));
    };
    getNowPlayingMovies();
  }, [dispatch]);                   //use [dispatch] for api calls
}

export default useNowPlayingMovies;