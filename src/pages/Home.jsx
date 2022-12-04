/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import TopArtistList from "../components/TopArtistList";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistsList } from "../features/albumListSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { artists } = useSelector((state) => state?.artistList?.items);

  useEffect(() => {
    dispatch(fetchArtistsList());
  }, []);

  return (
    <div className=" overflow-hidden bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 dark:from-dark-700 dark:to-gray-900">
      <h2 className=" flex justify-center py-6 dark:text-white text-base font-semibold uppercase sm:text-2xl border-4 sm:w-1/3 w-2/3 mx-auto my-5 rounded-md">
        Top Artist List
      </h2>

      <div className=" h-3/4 overflow-auto aslinur w-2/3 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {artists?.artist.map((item, index) => (
          <TopArtistList key={index} artistList={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
