import React from "react";

const Card = ({ item, name }) => {
  console.log(item);
  return (
    <div className="flex border border-white rounded-md h-40  ">
      <img
        className="w-1/3 rounded-md"
        src={item.image[3]["#text"]}
        alt="imageArtist"
      />
      <div className="flex flex-col justify-center items-center w-full text-center">
        <h5 className="text-sm md:text-base font-bold py-2 uppercase truncate w-32 ">
          {item?.name}
        </h5>
        <p className="text-xs md:text-sm italic py-2">{name}</p>
        <p className="text-xs md:text-sm italic py-2">{item?.playcount} Play</p>
        {item?.listeners && (
          <p className="text-xs md:text-sm italic py-2">
            {item?.listeners} Listener
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
