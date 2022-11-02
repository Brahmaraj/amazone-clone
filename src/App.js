import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //only run once when app component loads..[] will have component names which will trigger it reloading
    auth.onAuthStateChanged(authUser => {
      console.log('USER is >>>', authUser);
      if(authUser) {
        //user logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM convention (block, element and modifier)
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={[<Header />, <Home />]}/>
        <Route path="/checkout" element={[<Header />, <Checkout />]}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
