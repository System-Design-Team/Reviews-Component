import React, { Component } from "react";
import axios from 'axios';
import Rating from './Rating.js';
import StarRatings from 'react-star-ratings';
import ReviewList from './ReviewList.js';
import styles from '../styles/main.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentSku: 510121,
      currentRating: 2.75
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  // TODO: find a way to update current sku on get
  // function used to update all reviews
  getAllReviews() {
    axios.get('http://127.0.0.1:9004/api/reviews')
    .then(res => {
      const reviews = res.data;
      this.setState({reviews})
    })
    .catch(err => {
      if (err) {
        console.log(err);
        console.log(err.message);
      }
    })
  }

  render() {
    return (
      <div>
        <button>
          <span>Reviews
            <span><Rating sku={this.state.currentSku} reviews={this.state.reviews}/></span>
          </span>
        </button>
          <Rating sku={this.state.currentSku} reviews={this.state.reviews}/>
          <ReviewList rating={this.state.currentRating} reviews={this.state.reviews} product={this.state.currentSku}/>
      </div>
    );
  }
}
