import React from 'react';
import StarRatings from 'react-star-ratings';



const Rating = (props) => {

    return(
      <div>
            <StarRatings starDimension='40px' rating={props.rating} starRatedColor='yellow' numberOfStars={5} starSpacing='0px'/>
      </div>
    )

};

export default Rating;