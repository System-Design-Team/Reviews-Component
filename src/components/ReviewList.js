import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewList = (props) => {
  return (
    <div>
        {props.reviews.map((review) => {
          if (review.product_sku === props.product && review.recommended === 'TRUE') {
            return (
              <div className='reviewContent'>


                  <div className='reviewMain'>
                  <span className='username'>
                    <span><strong className='strongUsername'>{review.username}</strong>
                    </span>
                  </span>
                <div className='userContent'>
                    <h4>
                        <div className='stars'><StarRatings rating={review.star_rating} starRatedColor='yellow' numberOfStars={5} starDimension='27px' starSpacing='0px' /></div>
                        <div className='reviewTitle'>{review.review_title}</div>
                    </h4>

                  <img src="https://www.bestbuy.com/~assets/bby/_com/ugc-raas/ugc-common-assets/ugc-badge-verified-check.svg"></img>
                  <span className='verified'><strong> Verified Purchase </strong></span>
                  <span className='reviewDate'>| {review.date}</span>
                  <p className='reviewBody'>{review.review_body}</p>
                  <div className='recommendedTrue'><strong>I would recommend this to a friend</strong></div>
                  <div className='commentInteract'>
                    <button className='helpful'>Helpful (0) </button>
                    <button className='unhelpful'>Unhelpful (0) </button>
                    <button className='report'>Report </button>
                    <button className='post'>Post comment</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          } else if (review.product_sku === props.product && review.recommended === 'FALSE'){
            return (
              <div className='reviewContent'>


                  <div className='reviewMain'>
                  <span className='username'>
                    <span><strong className='strongUsername'>{review.username}</strong>
                    </span>
                  </span>
                <div className='userContent'>
                    <h4>
                        <div className='stars'><StarRatings rating={review.star_rating} starRatedColor='yellow' numberOfStars={5} starDimension='27px' starSpacing='0px' /></div>
                        <div className='reviewTitle'>{review.review_title}</div>
                    </h4>

                  <img src="https://www.bestbuy.com/~assets/bby/_com/ugc-raas/ugc-common-assets/ugc-badge-verified-check.svg"></img>
                  <span className='verified'><strong> Verified Purchase </strong></span>
                  <span className='reviewDate'>| {review.date}</span>
                  <p className='reviewBody'>{review.review_body}</p>
                  <div className='recommendedTrue'><strong>No, I would not recommend this to a friend</strong></div>
                  <div className='commentInteract'>
                    <button className='helpful'>Helpful (0) </button>
                    <button className='unhelpful'>Unhelpful (0) </button>
                    <button className='report'>Report </button>
                    <button className='post'>Post comment</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
  )
}

export default ReviewList;