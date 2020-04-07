//as you type ti's going to update the query
//it's going to update the query and call filter results to get all the matching results
//it will then render a card with the matching result cardrecipe title, photo and a link to that

import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
    this.handleTyping = this.handleTyping.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleKeyEnterPress = this.handleKeyEnterPress.bind(this);
  }

  componentDidMount(){
    this.props.fetchRecipes();
  }
  
  handleTyping(e){
    this.props.receiveSearchQuery(e.target.value);
    this.props.searchQuery ? this.filterResults() : null;
  }

  handleResultClick(e){
    if (this.props.loggedIn) {
      this.props.history.push(e.path);
      this.setState({query: ''});
      this.setState({results: []});
      return null
    } else { 
      this.props.openModal('login');
    }
  }

  handleOutsideClick(e){
    this.setState({results: []})
  }

  handleKeyEnterPress(e) {
    if (e.key === 'Enter') {
      if (this.props.loggedIn) {
        this.setState( { results: [] });
        this.props.history.push(`/search/${this.props.searchQuery}`)
      } else {
        this.props.openModal('login');
      };
    }
}

  filterResults() {

    let results = 
      this.props.recipes.filter(recipe => { return (
        recipe.title.toLowerCase().split(' ').join('').includes(this.props.searchQuery.toLowerCase())
        || recipe.description.toLowerCase().split(' ').join('').includes(this.props.searchQuery.toLowerCase())
      )});

      this.setState({ results })
  }
  
  render() {
    let resultList = this.state.results.map(result => 
      <Link to={`/recipes/${result.id}`}
          path={`/recipes/${result.id}`}
          onClick={this.handleResultClick}>
        <li className='search-result'>
          <img className='search-thumb' src={result.photoUrl} />
          <span className='result-text'></span>{result.title}
        </li>
    </Link>
    );

    return(
      <section className='search-bar'>
        <div className='search-result-container'>
          <input
            className='search-input'
            type='text'
            placeholder='🔍 What would you like to cook?'
            onChange={this.handleTyping}
            value={this.props.searchQuery}
            onKeyPress={this.handleKeyEnterPress}
          />
          {this.props.searchQuery
            && this.props.searchQuery.length > 1 ? resultList.slice(0,6) : null}
        </div>
      </section>
    )
  }
}

export default SearchBar;