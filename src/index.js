import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import { reducer } from './Redux/reducer';
import {Provider} from "react-redux"
import App from './App';




const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


