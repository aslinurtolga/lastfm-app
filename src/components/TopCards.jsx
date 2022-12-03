import React from "react";

const TopCards = ({item, name}) => {
  return (
    <div>
      <a href={item?.url}>
        <img src={item.image[3]["#text"]} alt="" />
        <div>
          <h5>{item?.name}</h5>
          <p>{name}</p>
          <p>{item?.playcount}</p>
          <p>{item?.listeners}</p>
        </div>
      </a>
    </div>
  );
};

export default TopCards;
