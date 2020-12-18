import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Signup from "./pages/signup"
import Login from "./pages/login"
import {Route, Link, Switch} from "react-router-dom";
import './App.css';


export const GlobalCtx = React.createContext(null)


function App() {
  const [gState, setGState] = React.useState({ url: "http://localhost:5000", token: null})

  React.useEffect(()=> {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token) {
      setGState({...gState, token: token.token})
    }
  }, [])

  return (
    <GlobalCtx.Provider value = {{gState, setGState}}>
    <div className="App">
      <Link to = "/" ><h1>MMA</h1></Link>
      <Header/>
      <main>
        <Switch>
          <Route exact path = "/" render={(rp)=> gState.token ?<h1>Dashboard</h1> : <h1>Home</h1>}/>
          <Route path = "/signup" render={(rp)=> <Signup {...rp}/>}/>
          <Route path = "/login" render={(rp)=> <Login {...rp}/>}/>
          {/* <Route path = "/dashboard" render={(rp=> <h1>Dashboard</h1>)}/> */}

        </Switch>
      </main>
      
    </div>
    </GlobalCtx.Provider>

  );
}

export default App;
