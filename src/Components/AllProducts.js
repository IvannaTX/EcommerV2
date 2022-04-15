import React from "react";
import "../App.css";
import Footer from "./Footer/Footer";
import axios from "axios";

const products = require("./products.json");

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/AllProducts")
      .then((response) => this.setState({ products: response.data }));
  }

  render() {
    return (
      <div id="products-wrapper">
        <div id="heroprod">
          <img
            className="prodhero"
            src="https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Yoga"
          />

          <p className="herotext">The Essentials</p>
        </div>
        <main>
          {this.state.products.map((product, index) => (
            <div className="prod">
              <img
                className="pro-img"
                src={product.image}
                alt={product.title}
              />
              <h4>{product.title} </h4>
              <p> {product.price}</p>
              <p> {product.item_description} </p> <br></br>
              <p>
                <button className="prodbtn">Add to Cart</button>{" "}
              </p>{" "}
            </div>
          ))}
        </main>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
