export const FETCH_TRANSACTION_CATEGORIES = "FETCH_TRANSACTION_CATEGORIES";
export const FETCH_TRANSACTION_CATEGORIES_SUCCESS = "FETCH_TRANSACTION_CATEGORIES_SUCCESS";
export const FETCH_TRANSACTION_CATEGORIES_FAILURE = "FETCH_TRANSACTION_CATEGORIES_FAILURE";
export const FETCH_TRANSACTION_CATEGORIES_RESET = "FETCH_TRANSACTION_CATEGORIES_RESET";

export const fetchTransactionCategories = () =>{
    return dispatch => {
        dispatch({type: FETCH_TRANSACTION_CATEGORIES,payload: false});
        dispatch({
            type: FETCH_TRANSACTION_CATEGORIES,
            payload: ""
        });
    }
}