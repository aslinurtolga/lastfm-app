import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TopArtistList from '../components/TopArtistList';

const Home = () => {
    const [artistList, setArtistList] = useState([])

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
    }, [])
    
  return (
    <div>
        <h2>Top Artist List</h2>
        <div>
            {artistList.map((item, index) => (
                <TopArtistList key={index} artistList={item}/>
                ))}
        </div>
    </div>
  )
}

export default Home