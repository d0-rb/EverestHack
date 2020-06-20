import React from 'react'
import './search.css'

function RecipeItem(props) {
    return (
        <div className= "recipe-item">
            <div className= "recipe-overlay">
                <div style= {{height: "70%"}}></div>
                <p className= "recipe-item-name">{props.recipeName}</p>
            </div>
        </div>
    )
}

export default RecipeItem;