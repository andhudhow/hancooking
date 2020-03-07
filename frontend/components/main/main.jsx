import React from 'react';
import MainCarousel from './main-carousel';
import { Link } from 'react-router-dom';

class Main extends React.Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    const d = new Date();

    return (
      <div className='outer'>
        <section className="rotd-container">
          <video className='splash-img' autoPlay muted loop type='video/mp4' src={window.splashVidURL} />
            <div id="rotd-label">Recipe<br/>of the day< /div>
              <div id="rotd-card">
                <h3 id="rotd-title">
                    Korean-Style Shortrib
                </h3>
                <div id="rotd-description">
                  <p>Also known as galbi (갈비), these shortribs are great at a restaurant, but also wonderful at home.</p>
                </div>
            </div>
          </section>
        <br />
        <section className="what-to-cook">
          What to Cook This Month
        <div className="recipes-week-of">Our best new recipes for {monthNames[d.getMonth()]}</div>
          <div className="rotm-container">
            <h2 className="section-title">Suggestions From the Editor</h2>
            <h3 className="section-intro">Recipes selected throughout the month by Andrew Howell, food editor of Hancooking.</h3>
          <div className="carousel-container">
            <MainCarousel carousel={this.props.editor} unsaveRecipe={this.props.unsaveRecipe} />
          </div>
          </div>
        </section>
        <section className="what-to-cook">
          <div className="rotm-container">
            <h2 className="section-title">Our Most Popular Recipes</h2>
            <h3 className="section-intro">Tried and true classics that are guaranteed to impress.</h3>
          <div className="carousel-container">
            <MainCarousel carousel={this.props.popular} unsaveRecipe={this.props.unsaveRecipe} />
          </div>
          <Link to="/recipes"><h3 className='recipe-index-link'>View All Recipes</h3></Link>
          </div>
        </section>
    </div>
  )
  }
}



export default Main;