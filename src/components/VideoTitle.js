import React from "react";

const VideoTitle = ({ title, overview }) => {
  return(
  <div className="pt-36 px-12">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/2">{overview}</p>
    <div className="">
      <buton className=" p-2 text-black bg-slate-300 border-black px-12 text-xl bg-opacity-50 rounded-lg"> ▶ Play</buton>
      <buton className="text-white bg-gray-600 rounded-lg p-2 px-12 text-xl bg-opacity-50 mx-2">More Info</buton>
    </div>
  </div>
  )
};

export default VideoTitle;
