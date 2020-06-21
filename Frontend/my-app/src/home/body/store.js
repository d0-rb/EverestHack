import { createStore } from 'redux'

// action
export function addItem(value, day) {
    return {
        type: 'ADD_ITEM',
        value,
        day
    }
}
// helper
function newDash(arr, item, day) {
    let temp = [...arr]
    temp[day].list.push(item)
    return temp
}

let dashboardTemplate = [
    {
        day: "Sunday",
        list: []

    },
    {
        day: "Monday",
        list: []
    },
    {
        day: "Tuesday",
        list: []
    },
    {
        day: "Wednesday",
        list: []
    },
    {
        day: "Thursday",
        list: []
    },
    {
        day: "Friday",
        list: []
    },
    {
        day: "Saturday",
        list: []
    }
]


// reducer
function dashManager(state = dashboardTemplate, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return newDash(state, action.value, action.day)
    }
}

// store
export let store = createStore(dashManager)

// pull data to update store
