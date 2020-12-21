import React from "react"
import {GlobalCtx} from "../App"
import {Carousel, Jumbotron, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Bio = (props) => {

    
    return (<>

    <h1>bio</h1>

    <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://imgix.ranker.com/user_node_img/50017/1000325053/original/paige-van-zant-all-people-photo-u10?fit=crop&fm=pjpg&q=60&w=375&dpr=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://madnessmedia.net/wp-content/uploads/2017/11/23596581_1482567695191952_3750961124766384128_n-800x800.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/16/ea/24/16ea24c91973705465a7876bd068361d.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



</>)
}
    export default Bio
