import React from 'react'
import { Link } from 'react-router-dom'

const TopArtistList = ({artistList}) => {
  return (
   <Link to={`artistDetail/${artistList.name}`}>
    <div className="">
        <img src={artistList?.image[2]["#text"]} alt="artistImg" className="" />
    </div>
    <div>
        <div>
            <h4>Artist</h4>
            <p>{artistList?.name}</p>
        </div>
    </div>
   </Link>
  )
}

export default TopArtistList