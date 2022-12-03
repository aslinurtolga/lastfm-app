import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopCards from "../components/TopCards";

const ArtistDetail = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { name } = useParams();

  const getAlbums = async () => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    try {
      const { data } = await axios(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json&`
      );
      setAlbums(data.topalbums.album);
    } catch (error) {}
  };
  const getTracks = async () => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    try {
      const { data } = await axios(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${apiKey}&format=json`
      );
      setTracks(data.toptracks.track);
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    getAlbums();
    getTracks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 dark:from-dark-700 dark:to-gray-900">
      <div className="flex col-start-2 gap-4 col-span-4 md:w-1/2 sm:w-1/3 my-4 mx-auto bg-orange-900 rounded-md">
        <img
          className="flex w-1/6 rounded-md my-4"
          src={tracks[0]?.image[2]["#text"]}
          alt=""
        />
        <h1 className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
          {name}
        </h1>
      </div>
      <div className="flex flex-col md:justify-between md:flex-row sm:col-2 h-full rounded-md ">
        <div className="grid grid-cols-1 md:w-screen">
          {albums.map((item, index) => {
            return <TopCards key={index} item={item} name={name} />;
          })}
        </div>
        <div className="grid grid-cols-1 md:w-screen">
          {tracks.map((item, index) => {
            return <TopCards key={index} item={item} name={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
