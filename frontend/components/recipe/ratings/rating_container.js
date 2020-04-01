import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createRating, updateRating } from '../../../actions/rating_actions';
import { Rating } from './rating';

const mapStateToProps = ({ session, entities }, ownProps) => ({
    currentUser: session.currentUser,
    recipe: entities.recipes[ownProps.match.params.recipeId],
    ratings: Object.keys(entities.ratings).map(key=>entities.ratings[key])
});

const mapDispatchToProps = dispatch => ({
    createRating: rating => dispatch(createRating(rating)),
    updateRating: rating => dispatch(updateRating(rating))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rating));