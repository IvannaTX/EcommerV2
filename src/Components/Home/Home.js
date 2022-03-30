import React from "react";
import Footer from "../Footer/Footer";
import "./Home.css";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <div id="heroprod">
        <img
          className="prodhero"
          src="./practiceYoga.jpg"
          alt="Yoga Diverse Stretch"
        />

        <p className="herotext">
          Style your practice
          <br />
          <button type="button" className="btn btn-dark btn-lg">
            <a href="/AllProducts">Products</a>
          </button>
        </p>
      </div>
      <h1 className="quote">
        "The beauty of the world lies in the diversity of its people"
      </h1>
      <Footer />
    </>
  );
};

export default Home;
