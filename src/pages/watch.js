import React from "react"
import {GlobalCtx} from "../App"
import {Figure} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Watch = (props) => {

    
    return (<>

    <h1>Watching</h1>
<div className="bio">  
    <Figure >
  <Figure.Image
    width={600}
    height={600}
    alt="171x180"
    src="https://theundefeated.com/wp-content/uploads/2020/08/GettyImages-1266540459-e1597754026274.jpg?w=700"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>

<Figure>
  <Figure.Image
    width={600}
    height={600}
    alt="171x180"
    src="https://theundefeated.com/wp-content/uploads/2020/08/GettyImages-1266540459-e1597754026274.jpg?w=700"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
</div>
</>)
}
    export default Watch
