import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      1.Main container
        -video background
        -video title

      2.Secondary container
        - many movie list   * n
        - many cards        * n
       */}
       
    </div>
  )
}

export default Browse;