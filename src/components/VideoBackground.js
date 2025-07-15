import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer'; // Adjust the path as necessary

const VideoBackground = ({movieID}) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);

  useMovieTrailer(movieID); 

  return (
    <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
    </div>
  )
}

export default VideoBackground;