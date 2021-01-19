import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrackList() {
  const [data, setData] = useState({ results: [] });
 
  useEffect(async () => {
    const result = await axios(
      'http://localhost:8000/track/api/tracks/',
    );
    setData(result.data)
  }, []);

  return (
    <div>
    {data.results.map(item => (
      <div>
        <p>{item.artist}</p>
        <p>{item.title}</p>
      </div>
    ))}
    </div>
  );

}


function App() {
 
  return (
    <TrackList></TrackList>
  );
}
 
export default App;