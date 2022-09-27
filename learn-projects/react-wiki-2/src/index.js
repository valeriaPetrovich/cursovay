import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import {createStore} from 'redux'


const initialState={
  cards: []
};
const addCards = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_CARDS":
      return {
        ...state,
        cards: [...state.cards,...action.payload]
      }
    default: return state 
  }
}

const store=createStore(addCards, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
);

  reportWebVitals();
   /*


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 /*if(action.type==="ADD_TRACK"){
    return [ ...state.items,
       action.payload ];
  }*/

/*import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./components/Search/Search";
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import reportWebVitals from "./reportWebVitals";
//import reduser from "./reduser"
const store=createStore(playlist);



function playlist(state=[],action){
  if(action.type==="ADD_TRACK"){
    return[
      ...state,
      action.payload
    ];
  }
  return state;
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Search/>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
