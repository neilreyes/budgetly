const initialState = {
    open: false
};

export default function( state = initialState, action ){
    
    if( action.type === "TOGGLE_DRAWER" ){
        const newState = Object.assign({}, state);
        newState.open = !newState.open;
        return newState;
    }
    return state;
}