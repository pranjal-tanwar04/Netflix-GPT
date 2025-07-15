import { API_OPTIONS } from '../utils/constants'; // Update the path as needed
import { addTrailerVideo } from '../utils/movieSlice'; // Update the path as needed

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
const useMovieTrailer = () =>{
    const [trailerID, setTrailerID] = useState(null);
    const dispatch = useDispatch();

    const getMovieVideos = async () =>{
        const data =await fetch ('',
          API_OPTIONS
        );
    
        const json = await data.json();
        console.log(json);
    
        const filterData = json.results.filter(video =>video.type === 'Trailer');
        const trailer =  filterData.length ? filterData[0]:json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        setTrailerID(trailer.key);
      };
      
      useEffect(() => {
        getMovieVideos();
      }, /*[]*/); // Dependency Array

    return trailerID;
}

export default useMovieTrailer;