import React, { Component } from "react";
import axios from 'axios';
import ReviewList from './ReviewList.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      currentSku: 510121
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
        <ReviewList reviews={this.state.reviews} product={this.state.currentSku}/>
      </div>
    );
  }
}
