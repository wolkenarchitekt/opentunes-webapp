import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'


function TrackList() {
  const [data, setData] = useState({ results: [] });

  useEffect(async () => {
    const result = await axios("http://localhost:8000/track/api/tracks/");
    setData(result.data);
  }, []);

  return (
      <Table striped bordered hover>
        <thead>
            <tr>
              <th></th>
              <th>Artist</th>
              <th>Title</th>
            </tr>
        </thead>
        <tbody>
        {data.results.map((item) => (
            <tr>
              <td><img src={'http://localhost:8000/' + item.image} width="32"/></td>
              <td>{item.artist}</td>
              <td>{item.title}</td>
            </tr>
        ))}
        </tbody>
      </Table>
  );
}

function App() {
  return <TrackList></TrackList>
}

export default App;
