import * as RatingAPIUtil from '../util/rating_api_util';
export const RECEIVE_RATING= 'RECEIVE_RATING';
export const UPDATE_RATING = 'UPDATE_RATING';
// export const REMOVE_RATING = 'REMOVE_RATING';

const receiveRating = recipes => {
  
  return {
    type: RECEIVE_RATING,
    recipes
  };
};

// const removeRating = errors => {
//   return {
//     type: REMOVE_RATING,
//     errors
//   };
// };


export const createRating = Rating => dispatch => (
  RatingAPIUtil.createRating(rating).then(
    (recipe => dispatch(receiveRating(recipe)))
  )
);

export const updateRating = rating => dispatch => (
  RatingAPIUtil.updateRating(rating).then(
    (recipe => dispatch(receiveRating(recipe)))
  )
);

// export const deleteRating = (ratingId) => (dispatch) => (
//   RatingAPIUtil.deleteRating(ratingId).then(
//     (recipe => dispatch(removeRating(recipe)))
//   )
// );