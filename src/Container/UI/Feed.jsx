import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../Styles/Feed.css";
import { Link } from "react-router-dom";
const Feed = () => {
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState([]);

  const API_KEY = "AIzaSyDqLn0xntQrUHxwRCYCaXe1jcfwbflD0EE";
  const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${API_KEY}`;

  const fetchVideoData = async () => {
    const response = await fetch(videoURL);
    const data = await response.json();
    setVideoData(data.items);
  };

  useEffect(() => {
    fetchVideoData();
  }, []);
  console.log(videoData);

  return (
    <div className="feed">
      {videoData.map((video) => (
        <Link to={`video/${video.id}`} className="video-card">
          <img
            src={video.snippet.thumbnails.high.url}
            alt=""
            className="thumbnail"
          />
          <h2>{video.snippet.title}</h2>
          <h3>{video.snippet.channelTitle}</h3>
          <p>{video.statistics.viewCount} views•1 month ago</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
