import {combineReducers} from 'redux';
import siteDrawer from './siteDrawer';
import transactions from './transactions';

export default combineReducers({
    siteDrawer,
    transactions,
});