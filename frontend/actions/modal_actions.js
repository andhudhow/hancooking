export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, recipeId, recipeTitle) => {
  return {
    type: OPEN_MODAL,
    modal,
    recipeId,
    recipeTitle
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};