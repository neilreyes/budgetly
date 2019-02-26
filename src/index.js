import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
=======
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <CssBaseline />
            <App />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);

>>>>>>> 834aac4b87ef649fd56927d4f8c3109bd8fa9eab
