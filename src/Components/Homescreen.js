import React from "react";
import "./Homescreen.css";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import requests from "./Requests";
import Row from "./Row";

function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Homescreen;
