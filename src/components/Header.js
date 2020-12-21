import React from "react"
import {Link} from "react-router-dom"
import {Nav} from "./Nav"
import Brawl from "../pages/brawl"


import {GlobalCtx} from "../App"
const Header = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx);
    const logout = (
        <Link>
        <h2 onClick={()=>{
            window.localStorage.removeItem("token")
            setGState({...gState, token: null})
        } }>Logout</h2>
        </Link>)

    return (<nav>
        {!gState.token ? <Link to="/signup"> <h2> Signup </h2></Link> : null }
        {!gState.token ? <Link to="/login"> <h2>Login</h2></Link> : null}
        {!gState.token ? <Link to="/past"> </Link> : null}
        {gState.token ? <Nav /> : null}
        {gState.token ? logout : null}

    


       


    </nav>
    )
}

export default Header