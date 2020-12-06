import React from 'react';
import {v4 as uuidv4} from 'uuid';

const recipeDetails = ({ingredients}) => {
    return (
        ingredients.map(ingredient => {
            return(
                <ul key={uuidv4()} className="ingredient-list">
                    <li className = "ingredient-text">
                        {ingredient.text}</li>

                       
                </ul>
            )
        })
    )
}

export default recipeDetails;
