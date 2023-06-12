import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./card.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container col-8">
        <Jumbotron />
        <div className="d-flex">
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
