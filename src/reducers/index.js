import {combineReducers} from 'redux';
import ui from './ui_reducer';
import transactions from './transactions_reducer';

export default combineReducers({
    ui,
    transactions,
});