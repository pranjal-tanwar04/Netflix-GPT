import React from "react";

const VideoTitle = ({ title, overview }) => {
  return(
  <div className="pt-36 px-12">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/2">{overview}</p>
    <div>
      <buton>Play</buton>
      <buton>More Info</buton>
    </div>
  </div>
  )
};

export default VideoTitle;
