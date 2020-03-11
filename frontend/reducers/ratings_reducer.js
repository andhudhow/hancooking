import { RECEIVE_RECIPE} from '../actions/recipe_actions';
import { RECEIVE_RATING, REMOVE_RATING } from '../actions/rating_actions';

const ratingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECIPE:
      return action.recipe.ratings;
    case RECEIVE_RATING:
      return action.recipe.ratings;
    // case REMOVE_RATING:
    //   return action.recipe.ratings;
    default:
      return state;
  }
};

export default ratingsReducer;