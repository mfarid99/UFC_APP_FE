import React from "react"
import {Link} from "react-router-dom"
import {Figure, Button, Row, Table, Dropdown, NavItem, NavLink} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Nav = (props) => {
    return (<>
    <nav className="navheads"> 
      <Link to = "/past">
            
      <Button id="navbtn">  <h3 id="navtxt">Past Events </h3>         </Button>

            
       </Link> 

        <Link to = "/bio">
            
           <Button id="navbtn"> <h3 id="navtxt">BIO </h3>   </Button> 
            
       </Link> 

       <Link to = "/stats"> 
            <Button id="navbtn"> <h3 id="navtxt"> Stats</h3></Button> 
            
        </Link> 

       <Link to = "/watch">
          
              <Button id="navbtn"> <h3 id="navtxt">  Watch </h3> </Button>   
            
        </Link>

      
    </nav>

</> )}