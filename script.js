//import redux

//select DOM elements
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counterEl = document.getElementById("counter");


//action identifier
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
//action creator
const increment = (payload) => ({ type: INCREMENT, payload: payload });
const decrement = (payload) => ({ type: DECREMENT, payload: payload });

//initial state
const initialState = {
    value: 2,
};

//create reducer
function counterReducer (state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

//create store
const store = Redux.createStore(counterReducer);

// button click listener 
incrementButton.addEventListener("click", () => {
    console.log('increment');
    store.dispatch(increment(6));
});

decrementButton.addEventListener("click", () => {
    console.log('decrement');
    store.dispatch(decrement(10));
});
function render () {
    const state = store.getState();
    counterEl.innerText = state.value;
}
render();
//update UI
store.subscribe(render);