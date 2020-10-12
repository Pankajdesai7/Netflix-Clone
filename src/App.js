import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './Row';
import request from './requests';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner />
        <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
        <Row title="Romanactic Movies" fetchUrl={request.fetchRomanceMovies}/>
        <Row title="Documentaries " fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
