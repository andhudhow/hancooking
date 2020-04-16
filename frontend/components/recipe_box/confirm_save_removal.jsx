import React from 'react';

export const ConfirmSaveRemoval = props => {
    const handleUnsave = () => {
        props.unsaveRecipe(props.recipe.id);
        props.closeModal();
    };

    return (
        <div>
            <div className='modal-body'>
                Are you sure you want to remove <span id="bold-recipe">{props.recipe.title}</span> from your recipe box?
            </div>
            <div className='unsave-btns'>
                <button className="btn-stn unsave-cancel-btn" onClick={() => props.closeModal()}>NO</button>
                <button className="btn-stn unsave-confirm-btn" onClick={() => handleUnsave()}>YES</button>
            </div>
        </div>
    )
};

 export default ConfirmSaveRemoval;