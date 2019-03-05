import {
    FETCH_TRANSACTION_CATEGORIES,
    FETCH_TRANSACTION_CATEGORIES_SUCCESS,
    FETCH_TRANSACTION_CATEGORIES_FAILURE,
    FETCH_TRANSACTION_CATEGORIES_RESET } from '../actions/transaction_cats_action';

const initialState = [
    {
        name: "Grocery",
        _id: "1",
    },{
        name: "Transportation",
        _id: "2"
    },{
        name: "Meal and drink",
        _id: "3"
    }
]

export default function(state=initialState, action){
    const { payload, type} = action;

    switch(type){
        case FETCH_TRANSACTION_CATEGORIES:
            return Object.assign({}, state, {})
        default:
            return state;
    }
}