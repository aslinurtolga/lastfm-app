import React from "react";

const TopCards = ({item, name}) => {
  return (
    <div>
      <a href={item?.url}>
        <img src={item.image[3]["#text"]} alt="" />
        <div>
          <h5></h5>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </a>
    </div>
  );
};

export default TopCards;
