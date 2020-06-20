import React from 'react'
import CalendarContainer from './calendarcontainer'
import CalendarItem from './calendaritem'
import './dashboard.css'

let date = new Date();
let dateNum = date.getDay();
let datSeq = []
let monthSeq = []

function returnDay(num) {
    switch(num) {
        case 0:
            return "SUN"
        case 1: 
            return "MON"
        case 2:
            return "TUE"
        case 3: 
            return "WED"
        case 4:
            return "THU"
        case 5: 
            return "FRI"
        case 6: 
            return "SAT"
        case 7:
            return "SUN"
        case 8: 
            return "MON"
        case 9:
            return "TUE"
        case 10: 
            return "WED"
        case 11:
            return "THU"
        case 12: 
            return "FRI"
        case 13: 
            return "SAT"
        case 14: 
            return "SUN"
    }
}

console.log(returnDay(dateNum))
let monthDate = date.getDate()
for (let i = 0; i < 7; i++) {
    datSeq.push(returnDay(dateNum + i))
    monthSeq.push(date.getDate(date.setDate(date.getDate() + i)))
    date = new Date()
    monthDate = date.getDate()
}

console.log(monthSeq)

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }  

    render() {
        return (
            <div className= "main-dashboard-div">
                <h1 className= "main-dashboard-title">Dashboard</h1>
                <div className= "separator-line"></div>
                <div className= "calendar-container-div">
                
                <CalendarContainer day= {datSeq[0]} dayNum= {monthSeq[0]}>
                    <CalendarItem name="Test" author="Bob Ross" />
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[1]} dayNum={monthSeq[1]}></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[2]} dayNum={monthSeq[2]}></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[3]} dayNum={monthSeq[3]}></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[4]} dayNum={monthSeq[4]}></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day={datSeq[5]} dayNum={monthSeq[5]}></CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day={datSeq[6]} dayNum={monthSeq[6]}></CalendarContainer>

                </div>
            </div>
        )
    }
}

export default Dashboard;
