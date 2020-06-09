import React, { Component } from "react";
import axios from 'axios';
import Rating from './Rating.js';
import StarRatings from 'react-star-ratings';
import ReviewList from './ReviewList.js';
import RatingMargin from './RatingMargin.js';
import Overview from './Overview.js';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      currentSku: 125613,
      currentRating: 1,
      hasClicked: false,
      overviewClick: true,
      specClick: false,
      allProducts: []
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.averageStars = this.averageStars.bind(this);
    this.showContent = this.showContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showOverviewClick = this.showOverviewClick.bind(this);
    this.showSpecClick = this.showSpecClick.bind(this);
    // this.getProduct = this.getProduct.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getSearchbarValue = this.getSearchbarValue.bind(this);
  }

  componentDidMount() {
    //this.getAllReviews();
    //this.getAllProducts();
    document.addEventListener('submit', () => this.getSearchbarValue());
  }

  // gets value from Wilson's search bar
  getSearchbarValue() {
    var search = document.getElementById('wilsoninputtag');
    if (search) {
      let currProduct = this.state.allProducts.filter(product => product.product_title === search.value)
      this.setState({currentSku: currProduct[0].sku}, () => this.averageStars(this.state.reviews, this.state.currentSku))
    }
  }


  // gets all products in database
  getAllProducts() {
    axios.get('http://worstbuyreviews-env-1.eba-miqf8zef.us-east-2.elasticbeanstalk.com/allProducts')
    .then(res => {
      const allProducts = res.data;
      this.setState({allProducts})
    })
    .catch(err => {
      if (err) {
        console.log(err)
        console.log(err.message)
      }
    })
  }


  // function used to update all reviews
  getAllReviews() {
    axios.get('http://worstbuyreviews-env-1.eba-miqf8zef.us-east-2.elasticbeanstalk.com/reviews')
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


  // gets the average star rating based on individual star rating per reveiw
  averageStars(reviews, sku) {
    let skuArray = [];
    reviews.map((item) => {
      if (item.product_sku === sku) {
        skuArray.push(item.star_rating)
      }
    })
    let total = skuArray.reduce((a, b) => a + b);
    let results = total / skuArray.length;
    this.setState({ currentRating: Math.round(10*results)/10});
  }

  // gets product from search query
  // doesn't work :(
  // getProduct(name) {
  //   axios.get('http://worstbuyreviews-env-1.eba-miqf8zef.us-east-2.elasticbeanstalk.com/product', {
  //     params: {
  //       name: name
  //     }
  //   })
  //   .then(res => {
  //     const product = res.data[0];
  //     console.log(product);
  //     this.setState({currentSku: product.product_sku})
  //   })
  //   .catch(err => {
  //     if (err) {
  //       console.log(err);
  //       console.log(err.message);
  //     }
  //   })
  // }


  // shows content for review section
  showContent(e) {
    this.setState({hasClicked: !this.state.hasClicked})
  }


  // shows content for overview section
  showOverviewClick() {
    this.setState({overviewClick: !this.state.overviewClick})
  }


  // shows conent for specifications section
  showSpecClick() {
    this.setState({specClick: !this.state.specClick})
  }


  // handles click for review section to update average starts and show component
  handleClick() {
    this.averageStars(this.state.reviews, this.state.currentSku);
    this.showContent();
  }


  render() {
    return (
      <div className='entireRender'>
        <div className="overviewDiv">
          <button className='overviewButton' onClick={() => this.showOverviewClick()}>
          <span className='btnReview'><h1 >Overview</h1>
          </span>
          {this.state.overviewClick ? <img id="closedChevronOver" src="https://drscdn.500px.org/photo/1015780035/m%3D900/v2?sig=94940562f1150fff4a78672b86aba75c66b32cb1743047176ecfcdf9f56103c8"></img> : <img id="chevron"  src="https://drscdn.500px.org/photo/1015780035/m%3D900/v2?sig=94940562f1150fff4a78672b86aba75c66b32cb1743047176ecfcdf9f56103c8"></img>}
          </button>
          {this.state.overviewClick && <Overview />}
        </div>

        <div className="specDiv">
            <button className='specButton' onClick={() => this.showSpecClick()}>
            <span className='btnReview'><h1 >Specifications</h1>
            </span>
            {this.state.specClick ? <img id="closedChevronSpec" src="https://drscdn.500px.org/photo/1015780035/m%3D900/v2?sig=94940562f1150fff4a78672b86aba75c66b32cb1743047176ecfcdf9f56103c8"></img> : <img id="chevron"  src="https://drscdn.500px.org/photo/1015780035/m%3D900/v2?sig=94940562f1150fff4a78672b86aba75c66b32cb1743047176ecfcdf9f56103c8"></img>}
          </button>
        </div>

        <div className="reviewDiv">
          <button className='reviewButton' onClick={() => this.handleClick()}>
            <span className='btnReview'>
              <h1 >Reviews</h1>
            </span>

            {!this.state.hasClicked && <span className='btnStars'><StarRatings
              starDimension='30px'
              rating={this.state.currentRating}
              starRatedColor='yellow' numberOfStars={5}
              starSpacing='0px'
              /> ({this.state.reviews.length})
            </span>
            }

            {this.state.hasClicked ? <img id="closedChevron" src="https://drscdn.500px.org/photo/1015780035/m%3D900/v2?sig=94940562f1150fff4a78672b86aba75c66b32cb1743047176ecfcdf9f56103c8"></img> : <img id="chevron"  src="https://drscdn.500px.org/photo/1015780035/m%3D900/v2?sig=94940562f1150fff4a78672b86aba75c66b32cb1743047176ecfcdf9f56103c8"></img>}
          </button>
        </div>

        {this.state.hasClicked && <RatingMargin
          reviews={this.state.reviews}
          length={this.state.reviews.length}
          rating={this.state.currentRating}
          sku={this.state.currentSku}
        />
      }

        {this.state.hasClicked && <ReviewList
          rating={this.state.currentRating}
          reviews={this.state.reviews}
          product={this.state.currentSku}
          name={this.state.allProducts}
        />}
        <img src="https://worstbuy.s3.us-east-2.amazonaws.com/footer.png"
             className="footerpos" />
      </div>
    );
  }
}
