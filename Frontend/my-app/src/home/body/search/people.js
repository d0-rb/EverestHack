import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import { Scrollbars } from 'react-custom-scrollbars'
import RecipeItem from './recipeitem'
import './search.css'

class PeopleItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setOpen: false
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

    render() {
        return (
            <div>
                <div onClick= {this.handleClick} className= "people-item">
                <p className= "people-item-name">{this.props.name}</p>
            </div>
                <Dialog open={this.state.setOpen} onClose={this.handleClose}>
                    <div className= "dialog-body">
                        <div className= "dialog-header">
                            <h1 className= "dialog-header-name">{this.props.name}</h1>
                        </div>
                        <div style={{overflow: "hidden", height: "100%", padding: "10px"}}>
                            <h1 style={{margin: "0"}}>Recipes</h1>
                            <Scrollbars style={{height: "95%"}}>
                                <div style={{postion: "relative", left: "0px"}} className= "grid-container">
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
                            </Scrollbars>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default PeopleItem;