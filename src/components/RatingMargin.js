import React from 'react';
import Rating from './Rating';

const RatingMargin = (props) => {
  return(
    <div>
      <div className='ratingDisplay'>
          <span className='customerRating'>Customer rating</span>
          <div className='bigRating'>{props.rating}</div>
          <div className='mainStars'>
            <Rating sku={props.sku} reviews={props.reviews} rating={props.rating}/>
            <span><img className="reviewBars" src="https://drscdn.500px.org/photo/1015789261/m%3D900/v2?sig=74df52c5ca8e0fef065c677f5787c6dcdc40c68f286876e33d48327a69780342"></img></span>
            <span className='reviewCount'>({props.length} Reviews)</span>
          </div>
          <div className='recommendPercent'>
            <span>0%</span><span> would recommend to a friend.</span>
          </div>
          <div className='customerReviews'>See all customer reviews</div>
        </div>
    </div>
  )
}

export default RatingMargin;