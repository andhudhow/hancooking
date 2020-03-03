import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  navButtonRender() {
    const { currentUser, openModal, logout, login } = this.props;
    const navButtons = () => (
      <ul>
        <li className='nav-btns'>
          <Link to='/recipes/recipe-box'>Grocery List</Link>
        </li>
        <li className='nav-btns'>
          <Link to='/recipes/recipe-box'>Recipe Box</Link>
        </li>
        <li className='nav-btns'>
          <a href="#logout" onClick={logout}>Log Out</a>
        </li>
      </ul>
    );

    const sessionButtons = () => (
      <ul>
        <li className='nav-btns' onClick={() => openModal('login')}>Log in</li>
        <li className='nav-btns' onClick={() => openModal('signup')}>Sign up</li>
        <li className='nav-btns' 
          onClick={() => login({ email: 'username@gmail.com', password: 'password'})}>Demo
        </li>
      </ul>
    );

    return currentUser ? navButtons() : sessionButtons()
  }

  render() {
    return(
      <section className='main-nav'>
        <div className='logo-wrapper'>
          <Link to='/'>
            <img className='logo' src='/assets/logo.png' />
          </Link>
        </div>

        
        {/* <img src="/assets/nav-inline-search-glass" id="search-glass" /> */}
        <section className='search-bar'>
          <input id='search-input' type='text' placeholder='What would you like to cook?'/>
          {/* Todo add a UL */}
        </section>

          <nav className='right-nav'>
              <div className="nav-btn-wrapper">
                { this.navButtonRender() }
              </div>
          </nav>
      </section>
    )
  }
}

export default NavBar;