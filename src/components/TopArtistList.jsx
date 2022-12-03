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
        <div className="">
            <div>
                <h4>Playcount:</h4>
                <p>{artistList?.playcount}</p>
            </div>
            <div>
                <h4>Listeners:</h4>
                <p>{artistList?.listeners}</p>
            </div>
        </div>
    </div>
   </Link>
  )
}

export default TopArtistList