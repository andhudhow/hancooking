import React from 'react';

export const ConfirmSaveRemoval = props => {
    return (
        <div>
            <div className='modal-body'>
                Are you sure you want to remove <span id="bold-recipe">{props.recipeTitle}</span> from your recipe box?
            </div>
            <div className='unsave-btns'>
                <button className="btn-stn unsave-cancel-btn">NO</button>
                <button className="btn-stn unsave-confirm-btn">YES</button>
            </div>
        </div>
    )
};

 export default ConfirmSaveRemoval;