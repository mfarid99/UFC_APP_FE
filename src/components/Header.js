import React from "react"
import {Link} from "react-router-dom"
import {Nav} from "./Nav"
import {Figure, Button, Row, Table, Dropdown, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalCtx} from "../App"


const Header = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx);
    const logout = (
        <Link>
        <Button id="logoutbtn"> 
        <h2 onClick={()=>{
            window.localStorage.removeItem("token")
            setGState({...gState, token: null})
        } }>Logout</h2> </Button>
        </Link>)

    return (<> 
        <nav> 
            {!gState.token ? <Link to="/signup">  <Button id="signupbtn"><h3>Signup</h3></Button> </Link> : null }  
            {!gState.token ? <Link to="/login"> <Button id="loginbtn"><h3>Login</h3></Button> </Link> : null} 
            {gState.token ? <Nav /> : null} 
            {gState.token ? logout : null} 
        </nav>

   </> )
}

export default Header