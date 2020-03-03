import React from 'react';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  return() {
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
            <ul>
              <li className='nav-btns'>
                <Link to='/recipes/recipe-box'>Grocery List</Link>
              </li>
              <li className='nav-btns'>
                <Link to='/recipes/recipe-box'>Recipe Box</Link>
              </li>
              <li className='nav-btns' onClick={() => openModal('login')}>Log in / Sign up</li>
            </ul>
          </div>
      </nav>
    </section>
  }
}