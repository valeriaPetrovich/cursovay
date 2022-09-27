/*import { Provider } from 'react-redux';
import {createStore} from 'redux'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from '../Home';
const store=createStore(addCard, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
);
let cards=[];
const addCard=()=>({
type: "ADD_CARDS",
payload: cards
})
   
/*
const store=addCard(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let cards=[{}];
 addCard(cards)=>({
    type:"ADD_CARDS",
    payload:cards
})
if(action.type==="ADD_CARDS"){
   state.cards=[...state.cards, ...action];
  }
*/