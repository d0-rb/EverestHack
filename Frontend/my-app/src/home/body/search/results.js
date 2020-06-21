import React from 'react'
import RecipeItem from './recipeitem'
import PeopleItem from './people'
import { Scrollbars } from 'react-custom-scrollbars'
import './search.css'
import $ from 'jquery'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        }
    }  

    componentDidMount() {
        let url = "https://hlq3rrn71l.execute-api.us-east-1.amazonaws.com/alpha/recipes?id=4"
        // let imaginaryHope= []
        $.get(url, (data) => {
            this.setState({
                isLoaded: true,
                items: data
            })
        }).fail((error) => {
            this.setState({
                isLoaded: true,
                error
            })
        })
    }
    
    render() {
        let displayPeople = this.props.displayPeople
        if (displayPeople) {
            return (
                <div className= "results-base">
                    <h1 className= "main-results-title">People</h1>
                    <div className= "separator-line"></div>
                    <Scrollbars style={{height: "95%", position: "relative", left: "15px"}}>
                        <div className= "grid-container">
                            <div className= "people-grid">
                                <PeopleItem name= "Test Smith"/>
                                <PeopleItem name= "John Smith"/>
                                <PeopleItem name= "John Smith"/>
                                <PeopleItem name= "John Smith"/>
                            </div>
                        </div>
                    </Scrollbars>
                    
                </div>
            )
        }

        const {error, isLoaded, items} = this.state
        if (error) {
            return (<div>Error... {error}</div>)
        }
        else if (!isLoaded) {
            return (<div>Loading...</div>)
        }
        else {
            let tempArray = []
            items.forEach(recipe => {
                tempArray.push(<RecipeItem key={recipe.id} imageUrl= {recipe.imageLink} recipeName= {recipe.name} steps= {recipe.steps} ingredients= {recipe.ingredients}/>)
            })
            return (
                <div className= "results-base">
                    <div className= "add-recipe-container">
                        <h1 className= "main-results-title">Recipes</h1>
                        <button className="material-icons add-recipe-button">add</button>
                    </div>
                    <div className= "separator-line"></div>
                    <Scrollbars style={{height: "95%", position: "relative", left: "15px"}}>
                    <div className= "grid-container">
                        <div className= "item-grid">
                            {
                                tempArray
                            }
                        </div>
                    </div>
                    </Scrollbars>
                </div>
            )
        }
    }
}

export default Results;
