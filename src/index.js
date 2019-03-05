import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const middleware = [thunk];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )  
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <App />
                </React.Fragment>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

