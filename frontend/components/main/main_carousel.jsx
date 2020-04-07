import React from "react";
import Slider from "react-slick";

import RecipeCardContainer from "../recipe_box/recipe_card_container";
import { cookTime } from '../../util/cook_time_util';
 
class MainCarousel extends React.Component {
  constructor(props){
    super(props)
    
  }

  render() {
    const images = this.props.carousel.map((recipe, index) => 
      <div>
        <RecipeCardContainer
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          authorName={recipe.authorName}
          cookTime={cookTime(recipe.minDuration)}
          photoUrl={recipe.photoUrl}
        />
      </div>
    );

    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 10,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    };

    return (
      <Slider {...settings}>
        {images}
      </Slider>
    );
  }
}

export default MainCarousel;