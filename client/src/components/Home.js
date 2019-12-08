import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheet/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="align-items-center home-row row">
        <div className="col text-center">
          <p className="h1 mb-5">Welcome to the starter page! :)</p>
          <Link className="btn btn-outline-secondary btn-lg" to="/subjects">
            Go to subjects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
