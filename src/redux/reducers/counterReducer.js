import * as actions from "../actions/actionTypes";

const counterReducer = (state=10, action) => {
    let newState;
    switch (action.type) {
        case actions.INCREASE_COUNTER:
            return (newState = state + action.payload);
            break;
        case actions.DECREASE_COUNTER:
            return (newState = state - action.payload);
            break;
        case actions.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
            break;
        default:
            return state;
    }
}

export default counterReducer;