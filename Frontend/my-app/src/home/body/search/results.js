import React from 'react'
import RecipeItem from './recipeitem'
import PeopleItem from './people'
import './search.css'

class Results extends React.Component {
    constructor(props) {
        super(props)
    }  

    render() {
        let displayPeople = this.props.displayPeople
        if (displayPeople) {
            return (
                <div className= "results-base">
                    <h1 className= "main-results-title">People</h1>
                    <div className= "separator-line"></div>
                    <div className= "grid-container">
                        <div className= "item-grid">
                            <PeopleItem name= "John Smith"/>
                            <PeopleItem name= "John Smith"/>
                            <PeopleItem name= "John Smith"/>
                            <PeopleItem name= "John Smith"/>

                        </div>
                    </div>

                </div>
            )
        }
        return (
            <div className= "results-base">
                <h1 className= "main-results-title">Recipes</h1>
                <div className= "separator-line"></div>
                <div className= "grid-container">
                    <div className= "item-grid">
                        <RecipeItem recipeName= "Casserole"/>
                        <RecipeItem recipeName= "Casserole"/>
                        <RecipeItem recipeName= "Casserole"/>
                        <RecipeItem recipeName= "Casserole"/>
                        <RecipeItem recipeName= "Casserole"/>
                        <RecipeItem recipeName= "Casserole"/>
                        <RecipeItem recipeName= "Casserole"/>
  
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Results;
