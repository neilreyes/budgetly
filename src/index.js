import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <CssBaseline />
                <App />
            </React.Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

