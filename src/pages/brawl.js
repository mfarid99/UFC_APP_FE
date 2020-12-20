import React from "react"
import {GlobalCtx} from "../App"
import {Carousel, Jumbotron, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Brawl = (props) => {

    // const {brawl} = props
    
    return (<>
    
   <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://milehighsports.com/wp-content/uploads/2020/01/USATSI_11394011-696x464.jpg"
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
      src="https://www.telegraph.co.uk/content/dam/mma/2017/08/17/TELEMMGLPICT000137551754_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXB3zF48bcOw5jNpxDOYJRn4.jpeg"
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
      src="https://cdn.vox-cdn.com/thumbor/4f5hVWMGw1lIPLIzi4w2zj7hY5M=/0x0:4646x3098/1200x800/filters:focal(1293x1080:2035x1822)/cdn.vox-cdn.com/uploads/chorus_image/image/67170655/1129476132.jpg.0.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </> )
}

export default Brawl
