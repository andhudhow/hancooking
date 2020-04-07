import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { saveComment } from '../../../actions/recipe_actions';
import { CommentForm } from './comment_form';

const mapStateToProps = ({ entities }, ownProps) => ({
    recipe: entities.recipes[ownProps.match.params.recipeId]
});
  
const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentForm));