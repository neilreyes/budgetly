import {combineReducers} from 'redux';
import ui from './ui_reducer';
import transactions from './transactions_reducer';
import transactionCats from './transaction_cats_reducer';

export default combineReducers({
    ui,
    transactions,
    transactionCats
});