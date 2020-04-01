import React, { useState } from 'react';

import { fetchNutritionData } from '../../../util/nutr_info_api_util';

export const NutritionalData = props => {
    let { recipe, ingredients } = props;
    const [nutrHover, setNutrHover] = useState(false);
    const [nutrInfo, setNutrInfo] = useState(nutrInfo);

    const nutrData = {
        title: recipe.title,
        yield: recipe.servings + "servings",
        ingr: ingredients.reduce((acc, el) => acc.concat((el.quantity + " " + el.description)), [])
    };
    debugger
    fetchNutritionData(nutrData).then(pay => setNutrInfo(pay));

    return (
        nutrInfo ? 
        <div className="nutr-container"
            onMouseLeave = {() => setNutrHover(false)}>
            <div className='nutr-header'>
                <img className='nutr-icon' 
                    src={window.nutrInfoIconOutline}
                    onMouseEnter = { () => setNutrHover(true) }
                />
                <span className="nutr-header-text" 
                    onMouseEnter = { () => setNutrHover(true) }
                > Nutritional Information
                </span>
            </div>
            <div className={nutrHover ? "nutr-list" : "nutr-hidden"} >
                <div className="nutr-index-header">Based on {recipe.servings} servings:</div>
                {nutrInfo.calories ?
                <li>Calories: {Math.floor(nutrInfo.calories)}</li> : null}
                {nutrInfo.totalNutrients.CHOCDF ?
                <li>Carbs: {Math.floor(nutrInfo.totalNutrients.CHOCDF.quantity)} grams </li> : null }
                {nutrInfo.totalNutrients.FAT ?
                <li>Fat: {Math.floor(nutrInfo.totalNutrients.FAT.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.FATRN ?
                <li>Trans Fat: {Math.floor(nutrInfo.totalNutrients.FATRN.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.FAMS ?
                <li>Monosaturated Fat: {Math.floor(nutrInfo.totalNutrients.FAMS.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.FAPU ?
                <li>Polyunsaturated Fat: {Math.floor(nutrInfo.totalNutrients.FAPU.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.FIBTG ?
                <li>Fiber: {Math.floor(nutrInfo.totalNutrients.FIBTG.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.SUGAR ?
                <li>Sugar: {Math.floor(nutrInfo.totalNutrients.SUGAR.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.PROCNT ?
                <li>Protein: {Math.floor(nutrInfo.totalNutrients.PROCNT.quantity)} grams</li> : null }
                {nutrInfo.totalNutrients.NA ?
                <li>Sodium: {Math.floor(nutrInfo.totalNutrients.NA.quantity)} grams</li> : null }
                <p className="nutrition-note">Note: The information shown is Edamam’s estimate based on available ingredients and preparation. It should not be considered a substitute for a professional nutritionist’s advice.</p>
                <p className="nutrition-attribution">Powered by <img id="edamam-logo" src="https://static01.nyt.com/applications/cooking/982798d/assets/edamam-logo.png"></img></p>
            </div>
        </div>
        : null
    )
}