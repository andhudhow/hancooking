import React from "react";
import Slider from "react-slick";

class MainCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
      ]
    };
    return (
      <Slider {...settings}>
        <div>
          <h3><img src="assets/bibimbap.jpg" /></h3>
        </div>
        <div>
          <h3><img src="assets/bibimbap.jpg" /></h3>
        </div>
        <div>
          <h3><img src="assets/bibimbap.jpg" /></h3>
        </div>
        <div>
          <h3><img src="assets/bibimbap.jpg" /></h3>
        </div>
        <div>
          <h3><img src="assets/bibimbap.jpg" /></h3>
        </div>
        <div>
          <h3><img src="assets/bibimbap.jpg" /></h3>
        </div>
      </Slider>
    );
  }
}

export default MainCarousel;