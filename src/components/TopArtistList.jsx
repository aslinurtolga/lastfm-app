import React from "react";
import { Link } from "react-router-dom";

const TopArtistList = ({ artistList }) => {
  return (
    <Link to={`artistDetail/${artistList.name}`}>
      <div className=" flex w-full h-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-500 to-indigo-200 rounded-md ">
        <img
          className="w-1/3 rounded-md"
          src={artistList?.image[2]["#text"]}
          alt=""
        />

        <div className="flex w-1/2 mx-auto justify-between items-start my-4">
          <div>
            <h4 className="font-bold text-sm md:text-base border-b border-black pb-1">
              Artist
            </h4>
            <p className="text-xs md:text-sm">{artistList?.name}</p>
          </div>
          <div className="flex flex-col">
            <div className="mb-1">
              <h4 className="font-bold text-sm md:text-base border-b border-black pb-1">
                Playcount:
              </h4>
              <p className="text-xs md:text-sm">{artistList?.playcount}</p>
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-sm md:text-base border-b border-black pb-1">
                Listeners:
              </h4>
              <p className="text-xs md:text-sm">{artistList?.listeners}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopArtistList;
