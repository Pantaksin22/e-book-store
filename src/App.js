import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Switch , Route} from
"react-router-dom";
import Checkout from "./Checkout";
import { Login } from "/.Login";
import payment from './Payment';
import { auth }from "./firebase";
import {useStateValue} from "./StatProvider";

function App() {
  const [{},dispatch] =useStateValue();

  useEffect (() => {
  auth.onAuthStateChange(authUser => {
    console.log("The user is >>> " , authUser);
  })

    if(authUser) {
      dispatch({
        type: 'SET_USER',
        user: authUser
    } else {
      dispatch({
        type: 'SET_USER',
        user:null
      })

    }
  } ,[])
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/orders">
        <Header />
        <orders/>
        </Route>
        

        <Route path="/login">
          <Login /> 
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            </Route>
            <Route path="/">
            <Header />
            <Home />
            </Route>
            </Switch>
            </div>
            </Router>
  );
            </Elements>
            </Route>
          </Header>
    i    </Route>
      </Switch>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;กกห