import React from 'react';
import Rating from './Rating';

const RatingMargin = (props) => {
  return(
    <div>
      <div className='ratingDisplay'>
          <span className='customerRating'>Customer rating</span>
          <div className='bigRating'>{props.rating}</div>
          <div className='mainStars'>
            <Rating sku={props.sku} reviews={props.reviews}/>
            <span className='reviewCount'>({props.length} Reviews)</span>
          </div>
          <div className='recommendPercent'>
            <span>0%</span><span> would recommend to a freind.</span>
          </div>
          <div className='customerReviews'>See all customer reviews</div>
        </div>
    </div>
  )
}

export default RatingMargin;