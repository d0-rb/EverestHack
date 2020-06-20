import React from 'react'
import './dashboard.css'

class CalendarItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
    }  

    handleClick = () => {
        this.setState({
            isActive: false
        })
    }

    render() {
        if (this.state.isActive) {
            return (
                <div className= "calendar-item">
                    <button onClick={this.handleClick} className="material-icons calendar-item-remove">remove</button>
                    <div>
                        <p className= "calendar-item-recipename">{this.props.name}</p>
                        <p className= "calendar-item-author">By {this.props.author}</p>
                    </div>
                </div>
            )
        } else {
            return false
        }
        
    }
}

export default CalendarItem;
