import React from 'react';
import MainCarousel from './main-carousel';

class Test extends React.Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className="carousel-container">
        <MainCarousel carousel={this.props.carousel} unsaveRecipe={this.props.unsaveRecipe} />
      </div>
  )
  }
}



export default Test;