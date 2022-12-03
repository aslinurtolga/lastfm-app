import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ArtistDetail = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { name } = useParams();
  console.log("albums", albums);
  console.log("tracks", tracks);

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
    } catch (error) {}
  };
  useEffect(() => {
    getAlbums();
    getTracks();
  }, []);

  return (
    <div className="bg-gradient-to-b h-full overflow-hidden from-yellow-500 via-purple-500 to-blue-500 dark:from-dark-700 dark:to-gray-900">
      <div className="flex border-4 sm:w-1/3 w-2/3 mx-auto my-5">
        <img className="flex w-1/4" src={tracks[0]?.image[2]["#text"]} alt="" />
        <div className="flex flex-col justify-center w-full items-center py-3 px-1">
          <h1 className="text-base font-semibold uppercase sm:text-2xl">
            {name}
          </h1>
          <p className="italic py-1">The Singer</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-3/4 mx-auto h-2/3 overflow-auto aslinur">
        {/* ALBUMS */}
        <div className="flex flex-col items-center md:w-1/2 h-1/2 md:mr-6 sm:h-full overflow-auto aslinur">
          <h2 className="font-bold text-2xl p-4 uppercase italic">
            Top Albums
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {albums?.map((item, index) => (
              <Card key={index} item={item} name={name} />
            ))}
          </div>
        </div>

        {/* TRACKS */}
        <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0 h-1/2 md:ml-6 sm:h-full overflow-auto aslinur">
          <h2 className="font-bold text-2xl p-4 uppercase italic ">
            Top Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks?.map((item, index) => (
              <Card key={index} item={item} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
