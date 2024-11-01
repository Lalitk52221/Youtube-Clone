import React from "react";
import '../Styles/Video.css'
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId } = useParams();
  console.log(videoId);
  return (
    <div className="video-container">
      {/* <video src={`https://www.youtube.com/watch?v=${videoId}`} controls autoPlay muted ></video> */}
      <iframe
        width="864"
        height="486"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default Video;
