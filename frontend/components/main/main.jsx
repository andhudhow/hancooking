import React from 'react';
import { Link } from 'react-router-dom';

import MainCarousel from './main_carousel';
import { scrollTop } from '../../util/scroll_util';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.documentElement.style.height="100%";
    document.documentElement.style.width="100%";
    document.body.style.height="100%";
    document.body.style.width="100%";
    { scrollTop() };
  }

  handleClick(e){
    if (!this.props.loggedIn) {
      this.props.openModal('login');
      this.props.addRedirect(`recipes/${this.props.featuredRecipeId}`);
    }
  }

  render() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    const d = new Date();

    return (
      <div className='outer'>
        <section className="rotd-container">
          <video className='splash-img' autoPlay muted loop type='video/mp4'
            src={window.splashVidURL} />
            <div id="rotd-label">Recipe<br/>of the day</div>
              
              <Link to={`recipes/${this.props.featuredRecipeId}`}>
                <div id="rotd-card" onClick={this.handleClick}>
                  <h3 id="rotd-title">
                      Korean-Style Shortrib
                  </h3>
                  <p id="rotd-description">
                    Also known as galbi (갈비), these shortribs are great at a restaurant, but also wonderful at home.
                  </p>
                  <p id="rotd-byline">
                    Suzana E. Lee
                  </p>
                </div>
            </Link>
          </section>
        <br />
        <section className="what-to-cook">
          What to Cook This Month
        <div className="recipes-week-of">
          Our best new recipes for {monthNames[d.getMonth()]}</div>
          <div className="rotm-container">
            <h2 className="section-title">Suggestions From the Editor</h2>
            <h3 className="section-intro">Recipes selected throughout the month by Andrew Howell, food editor of Hancooking.</h3>
          <div className="carousel-container">
            <MainCarousel
              carousel={this.props.editor}
              unsaveRecipe={this.props.unsaveRecipe}
              openModal={this.props.openModal}
            />
          </div>
          </div>
        </section>
        <section className="what-to-cook">
          <div className="rotm-container">
            <h2 className="section-title">Our Most Popular Recipes</h2>
            <h3 className="section-intro">Tried and true classics that are guaranteed to impress.</h3>
          <div className="carousel-container">
            <MainCarousel
              carousel={this.props.popular}
            />
          </div>
          <Link to={this.props.loggedIn ? "/recipes" : "/"}
            onClick={this.handleClick}>
            <h3 className='recipe-index-link'>View All Recipes</h3>
          </Link>
          </div>
        </section>
    </div>
  )
  }
}



export default Main;