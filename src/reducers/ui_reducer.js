import { UI_TOGGLE_DRAWER } from '../actions/ui_action';

const initialState = {
    siteDrawer: {
        isActive: false
    }
};

export default function( state = initialState, action ){
    const {type, payload} = action;

    switch(type){
        case UI_TOGGLE_DRAWER:
            return Object.assign({}, state, {
                siteDrawer: {
                    isActive: !state.siteDrawer.isActive
                }
            });
        default:
            return state
    }
}