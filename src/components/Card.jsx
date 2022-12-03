import React from "react";

const TopCards = ({ item, name }) => {
  return (
    <div className="flex border border-white rounded-md">
      <img className="w-1/3" src={item.image[3]["#text"]} alt="imageArtist" />
      <div className="flex flex-col justify-start items-center">
        <h5 className="text-sm md:text-base font-bold py-2 uppercase">
          {item?.name}
        </h5>
        <p className="text-xs md:text-sm italic py-2">{name}</p>
        <p className="text-xs md:text-sm italic py-2">{item?.playcount} Play</p>
        {item?.listeners && <p className="">{item?.listeners} Listener</p>}
      </div>
    </div>
  );
};

export default TopCards;
