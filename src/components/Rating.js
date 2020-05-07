import React from 'react';
import StarRatings from 'react-star-ratings';



class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageStars: 0,
      sku: this.props.sku,
      review: this.props.reviews
    }
    this.averageStars = this.averageStars.bind(this);
  }



  averageStars(reviews, sku) {
    let skuArray = [];
    reviews.map((item) => {
      if (item.product_sku === sku) {
        skuArray.push(item.star_rating)
      }
    })
    let total = skuArray.reduce((a, b) => a + b);
    let results = total / skuArray.length;
     this.setState({ averageStars: results});
  }


  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.averageStars(this.props.reviews, this.state.sku)
    }
  }



  render() {
    return(
      <div>
            <StarRatings starDimension='40px' rating={this.state.averageStars} starRatedColor='yellow' numberOfStars={5} starSpacing='0px'/>
      </div>
    )
  }
};

export default Rating;