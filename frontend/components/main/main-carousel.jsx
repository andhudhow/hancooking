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
        />
      </div>
    );

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 10
    };

    return (
      <Slider {...settings}>
        {images}
      </Slider>
    );
  }
}

export default MainCarousel;