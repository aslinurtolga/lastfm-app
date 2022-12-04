/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { fetchAlbums } from "../features/albumsSlice";
import { fetchTracks } from "../features/tracksSlice";

const ArtistDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const albums = useSelector(
    (state) => state?.albumList?.items?.topalbums?.album
  );
  const tracks = useSelector(
    (state) => state?.tracksList?.items?.toptracks?.track
  );

  useEffect(() => {
    dispatch(fetchAlbums(name));
    dispatch(fetchTracks(name));
  }, []);

  return (
    <div className="bg-gradient-to-b h-full overflow-hidden from-yellow-500 via-purple-500 to-blue-500 dark:from-dark dark:to-gray-600">
      <div className="flex border-4 sm:w-1/3 w-2/3 mx-auto my-5 rounded-md">
        <img
          className="flex w-1/4"
          src={tracks?.image?.[2]["#text"]}
          alt="tracks"
        />
        <div className="flex flex-col justify-center w-full items-center py-3 px-1  ">
          <h1 className="text-base font-semibold uppercase sm:text-2xl dark:text-white">
            {name}
          </h1>
          <p className="italic py-1 dark:text-white">The Singer</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-3/4 mx-auto h-2/3 overflow-auto aslinur">
        
        {/* ALBUMS */}
        <div className="flex flex-col items-center md:w-1/2 h-1/2 md:mr-6 sm:h-full overflow-auto aslinur">
          <h2 className="font-bold text-2xl p-4 uppercase italic dark:text-white">
            Top Albums
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-white">
            {albums?.map((item, index) => (
              <Card key={index} item={item} name={name} />
            ))}
          </div>
        </div>

        {/* TRACKS */}
        <div className="flex flex-col items-center md:w-1/2 mt-10 md:mt-0 h-1/2 md:ml-6 sm:h-full overflow-auto aslinur">
          <h2 className="font-bold text-2xl p-4 uppercase italic dark:text-white">
            Top Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-white">
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
