import axios from "axios";
import React, { useEffect, useState } from "react";
import TopArtistList from "../components/TopArtistList";

const Home = () => {
  const [artistList, setArtistList] = useState([]);

  const getArtistList = async () => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
    try {
      const {
        data: { artists },
      } = await axios(
        `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
      );
      setArtistList(artists.artist);
    } catch (error) {}
  };
  useEffect(() => {
    getArtistList();
  }, []);

  return (
    <div className=" overflow-hidden bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 dark:from-dark-700 dark:to-gray-900">
      <h2 className=" flex justify-center py-6 dark:text-white">
        Top Artist List
      </h2>
      <div className=" h-3/4 overflow-auto aslinur w-2/3 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {artistList.map((item, index) => (
          <TopArtistList key={index} artistList={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
