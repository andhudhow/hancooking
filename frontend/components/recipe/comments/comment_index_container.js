import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/recipe_actions';
import CommentIndex from './comment_index';

const mapStateToProps = ({ entities, session }) => ({
  comments: Object.keys(entities.comments).map(key => entities.comments[key]).sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1),
  currentUser: session.currentUser
});
  
const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);