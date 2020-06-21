import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import { Scrollbars } from 'react-custom-scrollbars'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { store, addItem } from '../store'
import './search.css'

function Direction(props) {
    return (
        <div className="direction-holder">
            <div className= "direction-number">
                {props.stepNum}
            </div>
            <p className= "directions-text">
                <i>
                    {props.stepContent}
                </i>
            </p>
        </div>
    )
}

function Ingredient(props) {
    return (
        <div>
            <p style= {{margin: "0", marginBottom: "15px"}}><i>{props.text}</i></p>
        </div>
    )
}

class RecipeItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setOpen: false,
            day: "Monday"
        }
    }

    handleClick = () => {
        console.log("clicked")
        this.setState({
            setOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            setOpen: false
        })
    }

    handleDateChange = (event) => {
        this.setState({
            day: event.target.value
        })
    }

    storeClick = () => {
        let dayNum;
        switch(this.state.day) {
            case "Sunday":
                dayNum = 0
                break;
            case "Monday":
                dayNum = 1
                break;
            case "Tuesday":
                dayNum = 2
                break;
            case "Wednesday":
                dayNum = 3
                break;
            case "Thursday":
                dayNum = 4
                break;
            case "Friday":
                dayNum = 5
                break;
            case "Saturday":
                dayNum = 6
                break;
        }
        let data = {
            title: this.props.recipeName
        }
        store.dispatch(addItem(data, dayNum));
    }

    retrieveSteps = () => {
        let returnVal = []
        if (typeof this.props.steps == 'undefined') {
            return returnVal
        }
        let num = 1;
        this.props.steps.forEach(step => {
            returnVal.push(<Direction stepNum={num} stepContent= {step}/>)
            num++;
        })
        return returnVal;
    }

    retrieveIngredients = () => {
        let returnVal = []
        if (typeof this.props.ingredients == 'undefined') {
            return returnVal;
        }
        this.props.ingredients.forEach(obj => {
            returnVal.push(<Ingredient text= {obj.amount + " " + obj.unit + " of " + obj.name}/>)
        })
        return returnVal
    }

    render() {
        return (                        
            <div>
                <div onClick={this.handleClick} className= "recipe-item">
                    <img className="image-container" src={this.props.imageUrl}></img>
                    <div className= "recipe-overlay">
                        <div style={{height: "80%"}}></div>
                        <p className= "recipe-item-name">{this.props.recipeName}</p>
                    </div>

                </div>
                <Dialog fullWidth= {true} maxWidth= {"md"} open={this.state.setOpen} onClose={this.handleClose}>
                    <div className= "recipe-dialog-body">
                        <div style={{overflow: "hidden", height: "30%"}}>
                            <img className="image-container bigger" src={this.props.imageUrl} />
                        </div>
                        <div className= "recipe-header">
                        <p style={{margin: "0px"}} className= "dialog-header-name">{this.props.recipeName}</p>
                        </div>
                        <Scrollbars>
                        <div className= "recipe-body">
                            <div className= "recipe-tags-div">

                            </div>
                            <div className= "main-content">
                                <div className= "ingredient-list">
                                    <h1 style= {{margin: "0"}}>Ingredients</h1>
                                    <div className= "ingredients-container">
                                        {
                                            this.retrieveIngredients()
                                        }
                                    </div>
                                </div>
                                <div className= "direction-list">
                                    <h1 style= {{margin: "0", marginBottom: "10px"}}>Directions</h1>
                                    <div className= "directions-container">
                                        {
                                            this.retrieveSteps()
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Scrollbars>
                        <div className= "add-to-cart">
                            <Select value={this.state.day} onChange={this.handleDateChange}>
                                <MenuItem value="Monday">Monday</MenuItem>
                                <MenuItem value="Tuesday">Tuesday</MenuItem>
                                <MenuItem value="Wednesday">Wednesday</MenuItem>
                                <MenuItem value="Thursday">Thursday</MenuItem>
                                <MenuItem value="Friday">Friday</MenuItem>
                                <MenuItem value="Saturday">Saturday</MenuItem>
                                <MenuItem value="Sunday">Sunday</MenuItem>
                            </Select>
                            <button onClick={this.storeClick} className= "add-to-cart-button">
                                <p className= "material-icons">add</p>
                                <p style= {{marginTop: "5px", marginRight: "5px"}}>Add to Cart</p>
                            </button>
                        </div>
                    </div>
                </Dialog>
            </div>
            
        )
    }
    
}

export default RecipeItem;