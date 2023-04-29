const createStore = require('redux').createStore; // We don't use import because no typescript here

// ٍState (may be it's regular variable or object)
const initialState = {
    count: 0
}

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action 
const action = createIncrementAction(2); // here we will increase with two every running this action

{
    type : ''
}// This object for explanation

// Creator actions
function createIncrementAction (number){
    // Return type
    return {
        type : INCREMENT,
        number
    }
}
// another Creator action to decremnet
function createDecrementAction (number){
    return {
        type: DECREMENT,
        number
    }
}
// The reducers function and must pass two parameters that what redux said state, action
const reducers = (state, action) => {
    switch (action.type){
        case(INCREMENT) : {
                return {
                    count: state.count + action.number
                }
        }
        case(DECREMENT) : {
                return {
                    count: state.count - action.number
                }
        }
    }
    return state;
}
// Store  with passing two parameters  reducers && initialState
const store = createStore(reducers, initialState);

// Dispatching functions : 
store.dispatch(action);
// if we do the dispatch more than time that will change the state again
store.dispatch(action);
// Run decrement function directly 
store.dispatch(createDecrementAction(3));
/// store.dispatch(action);
/// For testing  to see the state 
const newState = store.getState();
console.log(newState);