import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer =()=>{
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if (!movies)return;    //this is also known as early return
           //or
    // if (movies === null)return;

    
    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title,overview} = mainMovie;

    return<div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground/>
    </div>
}

export default MainContainer;