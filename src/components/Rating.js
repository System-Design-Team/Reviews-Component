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
    // this.iterateReviews = this.iterateReviews.bind(this);
  }

  // iterateReviews(e) {
  //   e.preventDefault()
  //   this.setState({review: this.props.reviews})
  //   this.averageStars(this.props.reviews, this.props.sku)
  // }


  averageStars(reviews, sku) {
    let skuArray = [];
    //console.log(reviews)
    reviews.map((item) => {
      if (item.product_sku === sku) {
        skuArray.push(item.star_rating)
      }
    })
    console.log(skuArray)
    let total = skuArray.reduce((a, b) => a + b);
    let results = total / skuArray.length;
     this.setState({ averageStars: results});
  }


  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      console.log(this.props)
      console.log(prevProps)
      console.log(this.props.reviews)
      this.averageStars(this.props.reviews, this.state.sku)
      //this.setState({review: this.props.reviews}, console.log(this.state.review))
    }
  }

  // getDerivedStateFromProps() {
  //   console.log(this.props.reviews)
  //   //this.averageStars(this.props.reviews, this.props.sku)
  //   this.setState({review: this.props.reviews})
  // }



  render() {
    // {console.log(this.state.review)}
    return(
      <div>
            <StarRatings rating={this.state.averageStars} starRatedColor='yellow' numberOfStars={5} />
            {/* <button onClick={this.iterateReviews}>click</button> */}
      </div>
    )
  }
};

export default Rating;