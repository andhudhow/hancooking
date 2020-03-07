import React from "react";
import Slider from "react-slick";
import RecipeCard from "../../components/recipe_box/recipe_card";
import { cookTime } from '../../util/cook_time_util';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 
class MainCarousel extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const images = this.props.carousel.map(recipe => 
      <div>
        <RecipeCard
          id={recipe.id}
          title={recipe.title}
          authorName={recipe.authorName}
          cookTime={cookTime(recipe.minDuration)}
          unsaveRecipe={this.props.unsaveRecipe}
          openModal={this.props.openModal}
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
      // nextArrow: <img src=""
      // prevArrow: <SamplePrevArrow />
    };

    return (
      <Slider {...settings}>
        {images}
      </Slider>
    );
  }
}

export default MainCarousel;