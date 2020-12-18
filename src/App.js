import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Signup from "./pages/signup"
import {Route, Link, Switch} from "react-router-dom";
import './App.css';


export const GlobalCtx = React.createContext(null)


function App() {
  const [gState, setGState] = React.useState({ url: "http://localhost:5000"})
  return (
    <GlobalCtx.Provider value = {{gState, setGState}}>
    <div className="App">
      <h1>MMA</h1>
      <Header/>
      <main>
        <Switch>
          <Route exact path = "/" render={(rp)=> <h1>Home</h1>}/>
          <Route path = "/signup" render={(rp)=> <Signup {...rp}/>}/>
          <Route path = "/login" render={(rp)=> <h1>Login</h1>}/>
          <Route path = "/dashboard" render={(rp=> <h1>Dashboard</h1>)}/>

        </Switch>
      </main>
      
    </div>
    </GlobalCtx.Provider>

  );
}

export default App;
