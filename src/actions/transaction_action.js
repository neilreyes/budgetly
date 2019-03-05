export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const ADD_TRANSACTION_SUCCESS = "ADD_TRANSACTION_SUCCESS";
export const ADD_TRANSACTION_FAILURE = "ADD_TRANSACTION_FAILURE";
export const ADD_TRANSACTION_RESET = "ADD_TRANSACTION_RESET";

export const addNewTransaction = newData => {
    return dispatch => {
        dispatch({type: ADD_TRANSACTION});
        dispatch({type: ADD_TRANSACTION_SUCCESS,payload: newData});
        dispatch({type:ADD_TRANSACTION_RESET });
    }
}