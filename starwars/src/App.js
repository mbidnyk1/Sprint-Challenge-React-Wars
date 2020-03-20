import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import StarWars from './components/StarWars';
import { Row } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 0;
  margin: 10px 10px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [page, setPage] = useState("https://swapi.co/api/people/?page=1");
  const [pageData,setPageData] = useState({})
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(page)
        .then(res => {
          console.log(res.data.results);
          const people = res.data.results;
          setData(people);
          setPageData(res.data);
        })
        .catch(err => {
          console.log('error', err);
        });
    }
    fetchData();
  }, [page]);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Row>
        {data.map(item => <StarWars data={item} key={item.name}/>)}
      </Row>
      <Button onClick={() => setPage(pageData.previous)}>Previous Page</Button>
      <Button onClick={() => setPage(pageData.next)}>Next Page</Button>
    </div>
  );
}

export default App;
