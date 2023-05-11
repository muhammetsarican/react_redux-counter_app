import * as actions from "./actionTypes";

export const increaseCounter=()=>({
    type:actions.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actions.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actions.INCREASE_BY_TWO_COUNTER,
    payload:2
})