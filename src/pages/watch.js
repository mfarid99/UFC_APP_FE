import React from "react"
import {GlobalCtx} from "../App"
import {Figure, Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Watch = (props) => {

    
    return (<>


<div >
    
<img
      className="d-block w-100"
      src= "https://ca-times.brightspotcdn.com/dims4/default/14d4c34/2147483647/strip/true/crop/2048x1151+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F40%2F67%2Fef6302f2cc991ba29dcdd13defe9%2Fla-1551595780-b6wfrgktak-snap-image"
      alt="UFC 299"
    />

            <div class="carousel-caption">
              <h1>UFC FIGHT PASS</h1>
              <h3 id="originaltxt">Originals, UFC library & More</h3>
            
            <Button href = "https://ufcfightpass.com/signup"variant="danger">Subscribe</Button>{' '}
            <Button href = "https://ufcfightpass.com/login"variant="danger">Login</Button>{' '}
            </div>
         </div>
      
      
    
</>)
}
    export default Watch
