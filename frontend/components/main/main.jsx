import React from 'react';
import MainCarousel from './main-carousel';

class Main extends React.Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className='outer'>
        <section className="rotd-container">
          <video className='splash-img' autoPlay muted loop type='video/mp4' src='/assets/COTE_VIDEO_4.mp4' />
            <div id="rotd-label">recipe<br/>OF THE DAY</div>
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
          What to Cook This Week
          <br /><br />
          <div className="carousel-container">
            <MainCarousel carousel={this.props.carousel} unsaveRecipe={this.props.unsaveRecipe} />
          </div>
        </section>
    </div>
  )
  }
}



export default Main;