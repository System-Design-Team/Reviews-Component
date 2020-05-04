import React from 'react';

const ReviewList = (props) => {
  return (
    <div>
        {props.reviews.map((review) => {
          if (review.product_sku === props.product && review.recommended === 'TRUE') {
            return (
              <div className='reviewContent'>
              <span className='username'>{review.username}</span>
              <h4><span className='reviewTitle'>{review.review_title}</span></h4>
              <span className='verified'>Verified Purchase </span>
            <span className='reviewDate'>{review.date}</span>
            <p className='reviewBody'>{review.review_body}</p>
            <span className='recommendedTrue'>I would recommend this to a friend</span>
            <div className='commentInteract'>
              <span className='helpful'>Helpful </span>
              <span className='unhelpful'>Unhelpful </span>
              <span className='report'>Report </span>
              <span className='post'>Post comment</span>
            </div>
            </div>
            )
          } else if (review.product_sku === props.product && review.recommended === 'FALSE'){
            return (
              <div className='reviewContent'>
              <span className='username'>{review.username}</span>
              <h4><span className='reviewTitle'>{review.review_title}</span></h4>
              <span className='verified'>Verified Purchase </span>
            <span className='reviewDate'>{review.date}</span>
            <p className='reviewBody'>{review.review_body}</p>
            <span className='recommendedTrue'>No, I would not recommend this to a friend</span>
            <div className='commentInteract'>
              <span className='helpful'>Helpful </span>
              <span className='unhelpful'>Unhelpful </span>
              <span className='report'>Report </span>
              <span className='post'>Post comment</span>
            </div>
            </div>
            )
          }
        })}
      </div>
  )
}

export default ReviewList;