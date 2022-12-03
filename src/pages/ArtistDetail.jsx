import React from 'react'

const ArtistDetail = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

    const getAlbums = async () => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  try {
    const {data} = await axios (
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${apiKey}&format=json&`
      );
      setAlbums(data.topalbums.album)
  } catch (error) {}
};
    const getTracks = async () => {
    const apiKey = process.env.REACT_APP_LASTFM_API_KEY;
  try {
    const {data} = await axios (
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${apiKey}&format=json`);
      setAlbums(data.toptracks.track)
  } catch (error) {}
};
useEffect(() => {
  getAlbums()
  getTracks()
      // eslint-disable-next-line

export default ArtistDetail;