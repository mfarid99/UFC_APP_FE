import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Signup from "./pages/signup"
import Login from "./pages/login"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import {Nav} from "./components/Nav"
import Past from "./pages/past"
import Bio from "./pages/bio"
import Watch from "./pages/watch"
import Stats from "./pages/stats"


import {Route, Link, Switch} from "react-router-dom";
import './App.css';


export const GlobalCtx = React.createContext(null)


function App() {
  const [gState, setGState] = React.useState({ url: "https://reactexpressufcbe.herokuapp.com", token: null})

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
      <Link to = "/" ><h1 id="ufctxt">UFC</h1></Link>

      <Header />

      <main>
        <Switch>
          <Route exact path = "/" render={(rp)=> gState.token ?<Dashboard/>: <Home/>}/>
          <Route path = "/signup" render={(rp)=> <Signup {...rp}/>}/>
          <Route path = "/login" render={(rp)=> <Login {...rp}/>}/>
          <Route path = "/dashboard" render={(rp=> <h1>Dashboard</h1>)}/>
        </Switch>
      </main>
      

      <Route path = "/past" render={(rp)=> gState.token ? <Past/> : <Home/>  }/> 
      <Route path = "/bio" render={(rp)=> gState.token ? <Bio/> : <Home/>}/> 
      <Route path = "/watch" render={(rp)=> gState.token ? <Watch/> : <Home/>}/> 
      <Route path = "/stats" render={(rp)=> gState.token ? <Stats/> : <Home/>}/>

    </div>
    </GlobalCtx.Provider>

  );
}

export default App;
