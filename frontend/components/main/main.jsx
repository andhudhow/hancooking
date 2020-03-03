import React from 'react';
import { Link } from 'react-router-dom';
import MainCarousel from './main-carousel';
import { openModal } from '../../actions/modal_actions';
import NavBarContainer from '../main/navbar/nav_container';

//A welcome message including the user's username
//A button to logout

//Nav bar
// const NavBar = ( { currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav className='login-signup'>
//             <Link to='/login'>Log in!</Link> <br />
//             <Link to='/signup'>Sign up!</Link>
//         </nav>
//     );

//     const personalGreeting = () => (
//         <nav className='personal-greeting'>
//             <h2 className='header-name'>Welcome { currentUser.username }!</h2>
//             <button className='log-out-button' onClick={logout}>Log Out</button>
//         </nav>
//     );

//     return currentUser ? personalGreeting() : sessionLinks();
// }

const Splash = () => {
  return (
      <div className='outer'>
        <NavBarContainer />
        {/* <img src='/assets/bibimbap' className='splash-img' /> */}
        <section className="rotd-container">
          <video className='splash-img' autoPlay muted loop type='video/mp4' src='/assets/COTE_VIDEO_4.mp4' />
            <div id="rotd-label">RECIPE <br/>OF THE DAY</div>
              <div id="rotd-card">
                <h3 id="rotd-title">
                    Korean-Style Shortrib
                </h3>
                <div id="rotd-description">
                  <p>Also known as galbi, these shortribs are great at a restaurant, but also wonderful at home.</p>
                </div>
            </div>
          </section>
        <br />
        <section className="what-to-cook">
          What to Cook This Week
          <br /><br />
          <div className="carousel-container">
            <MainCarousel />
          </div>
        </section>
    </div>
  )
}



export default Splash;