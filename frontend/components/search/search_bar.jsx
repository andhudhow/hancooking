import React from 'react';
import { Link } from 'react-router-dom';

import { lowerSplitJoin } from '../../util/search_query_util'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
    this.handleTyping = this.handleTyping.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleKeyEnterPress = this.handleKeyEnterPress.bind(this);
  }

  componentDidMount(){
    this.props.fetchRecipes();
  }
  
  handleTyping(e){
    this.props.receiveSearchQuery(e.target.value);
    this.props.searchQuery ? this.filterResults() : null;
  }

  handleResultClick(path){
    if (this.props.loggedIn) {
      this.setState({results: []});
  } else {
      this.props.addRedirect(path);
      this.setState({results: []});
      this.props.openModal('login');
    };
  }

  handleKeyEnterPress(e) {
    if (e.key === 'Enter') {
      if (this.props.loggedIn) {
        this.setState( { results: [] });
        this.props.history.push(`/search/${this.props.searchQuery}`)
      } else {
        this.setState( { results: [] });
        this.props.openModal('login');
        this.props.addRedirect(`/search/${this.props.searchQuery}`);
      };
    }
}

  filterResults() {
    let results = 
      this.props.recipes.filter(recipe => (
        lowerSplitJoin(recipe.title)
          .includes(lowerSplitJoin(this.props.searchQuery))
        || lowerSplitJoin(recipe.description)
            .includes(lowerSplitJoin(this.props.searchQuery))
      ));

      this.setState({ results })
  }
  
  render() {
    let resultList = this.state.results.map(result => 
      <Link to={`/recipes/${result.id}`}
          onClick={()=>this.handleResultClick(`/recipes/${result.id}`)}>
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