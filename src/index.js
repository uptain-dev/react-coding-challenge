import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { startSetSubjects } from './actions/subjects';

const store = configureStore();
const jsx = (
    <Provider store={store}>
      <App />
    </Provider>
  );

//fetch the initial subjects to populate in subjects dropdown
store.dispatch(startSetSubjects()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
