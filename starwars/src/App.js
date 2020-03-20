import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import StarWars from './components/StarWars';
import { Row } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://swapi.co/api/people/')
        .then(res => {
          setData(res.data.results);
        })
        .catch(err => {
          console.log('error', err);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Row>
        {data.map(item => <StarWars data={item} key={item.name}/>)}
      </Row>
    </div>
  );
}

export default App;
