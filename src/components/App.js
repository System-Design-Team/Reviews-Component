import React, { Component } from "react";
import axios from 'axios';
import Rating from './Rating.js';
import StarRatings from 'react-star-ratings';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

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
        <Rating sku={510121} reviews={this.state.reviews}/>
        {this.state.reviews.map((review) => {
          if (review.product_sku === 510121) {
            return (
              <div>
              <p>{review.username}</p>
              <h4><p>{review.review_title}</p></h4>
            <p>{review.review_body}</p>
            <p>{review.date}</p>
            </div>
            )
          }
        })}
      </div>
    );
  }
}
