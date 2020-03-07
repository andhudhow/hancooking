import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
    return ( { recipes: Object.values(entities.recipes)} )
};
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));