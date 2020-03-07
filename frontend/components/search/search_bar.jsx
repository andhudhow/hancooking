//as you type ti's going to update the query
//it's going to update the query and call filter results to get all the matching results
//it will then render a card with the matching result cardrecipe title, photo and a link to that

import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    }
    this.handleTyping = this.handleTyping.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.filterResults = this.filterResults.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchRecipes();
  }
  
  handleTyping(e){
    this.setState( {query: e.target.value} );
    this.filterResults();
  }

  handleResultClick(e){
    this.props.history.push(e.path);
    this.setState({query: ''});
    this.setState({results: []});
  }

  handleOutsideClick(e){
    
    this.setState({results: []})
  }

  filterResults() {
    let titleResults = this.props.recipes.filter(recipe => recipe.title.toLowerCase().includes(this.state.query.toLowerCase()));
    // let descriptionResults = this.props.recipes.filter(recipe => recipe.description.toLowerCase().split(' ').includes(this.state.query.toLowerCase()));
    
    let results = titleResults//.concat(descriptionResults);
    //ingredient matches
    //tag matches
    this.setState({ results })
  }
  
  render() {
    let resultList = this.state.results.map(result => 
      <li>
        <Link to={`/recipes/${result.id}`}
          path={`/recipes/${result.id}`}
          onClick={this.handleResultClick}
        >
            {result.title}
        </Link>
      </li>
    );

    return(
      <section className='search-bar'>
      <input
        id='search-input'
        type='text'
        placeholder='What would you like to cook?'
        onChange={this.handleTyping}
        value={this.state.query}
      />
      <div>
        {resultList.slice(0,6)}
      </div>
      </section>
    )
  }
}

export default SearchBar;