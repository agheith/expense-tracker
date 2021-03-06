console.log("redux-101");

import { createStore } from 'redux';

// Action generators - functions that return Action objects

const incerementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})


// Reducers
// 1. Reducers are pure funtions -
//    the output is always determined by the input
// 2. Never change state or action]

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//I need Actions to change the state
// Actions- an object that gets sent to the store


store.dispatch(incerementCount({ incrementBy: 5 }))

store.dispatch(incerementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))
