import * as RatingAPIUtil from '../util/rating_api_util';
export const RECEIVE_RATING= 'RECEIVE_RATING';
export const UPDATE_RATING = 'UPDATE_RATING';
// export const REMOVE_RATING = 'REMOVE_RATING';

const receiveRating = payload => {
  return {
    type: RECEIVE_RATING,
    payload
  };
};

const receiveUpdatedRating = payload => {
  return {
    type: UPDATE_RATING,
    payload
  };
};

// const removeRating = errors => {
//   return {
//     type: REMOVE_RATING,
//     errors
//   };
// };

export const createRating = rating => dispatch => 
{
  
  return (
  RatingAPIUtil.createRating(rating).then(
    (payload => dispatch(receiveRating(payload)))
  ))
}
;

export const updateRating = rating => dispatch => (
  RatingAPIUtil.updateRating(rating).then(
    (payload => dispatch(receiveUpdatedRating(payload)))
  )
);

// export const deleteRating = (ratingId) => (dispatch) => (
//   RatingAPIUtil.deleteRating(ratingId).then(
//     (recipe => dispatch(removeRating(recipe)))
//   )
// );