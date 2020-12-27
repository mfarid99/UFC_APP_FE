import { set } from "mongoose"
import React from "react"
import {GlobalCtx} from "../App"
import {Carousel, Jumbotron, Button, Card, CardGroup, CardDeck, ListGroup, ListGroupItem, Container, Image, Row, Col, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




const Past = (props) => {


  const {gState, setGState} = React.useContext(GlobalCtx)
  const {url, token} = gState
  const [notes1, setNotes1] = React.useState(null)
  const [updateID1, setUpdateID1] = React.useState(null)

  const getNotes1  = async () => {
      const response = await fetch(url + "/comment/", {
          method: "get",
          headers: {
              Authorization: "bearer " + token
          }
      })
      const json = await response.json()
      setNotes1(json)
  }
  React.useEffect(()=> {
      getNotes1()
  }, [])

  const input = React.useRef(null)
  const update = React.useRef(null)

  const handleClick = (event) => {
      console.log(input)
      const comment = input.current.value

      fetch(url + "/comment/", {
          method: "post",
          headers: {
              "Content-Type": "application/json", 
              Authorization: `bearer ${token}`
          }, 
          body: JSON.stringify({comment})
      })
          .then(response => response.json())
          .then(data => {
              input.current.value=""
              getNotes1 ()
          })
      
  };

  const handleUpdate = () => {
      console.log(input)
      const comment = update.current.value

      fetch(url + "/comment/" + updateID1, {
          method: "put",
          headers: {
              "Content-Type": "application/json", 
              Authorization: `bearer ${token}`
          }, 
          body: JSON.stringify({comment})
      })
          .then(response => response.json())
          .then(data => {
              update.current.value=""
              setUpdateID1(null)
              getNotes1 ()
          })
      
  };

  const handleDelete = (id) => {
  

      fetch(url + "/comment/" + id, {
          method: "delete",
          headers: {
              Authorization: `bearer ${token}`
          }, 
      })
          .then(response => response.json())
          .then(data => {
              getNotes1 ()
          })
      
  }


    // const {brawl} = props
    
    return (<>
    <div className="pastmaindiv"> 
    <h1 id="pasttxt">UFC FIGHT NIGHT</h1>
      <div>
      <img
      className="d-block w-100"
      src= "https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2020-12/UFCVegas17HeroUpdated.jpg?null&h=d1cb525d&itok=N-1dhahr"
      alt="UFC 299"
    />
      </div>
    
   {/* <Carousel>
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
</Carousel> */}
              <h1 id="maincardtxt">Main Card Results </h1>
<Container>
<Row className="oldfightsdiv">
    <Col>  <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2019-03/THOMPSON_STEPHEN_L.png?yIOFgZcDXQvzvjuBQQQw73IYFi8oQntP&itok=bxYzmGIE" fluid /> </a> </Col>
    <Col>  
    <h5 id="win">WIN</h5>

    <a href="/stats" class="nounderline">

            <div> 
              <h2 id="stephen">  <br/>  STEPHEN </h2> 
            <h2>THOMPSON</h2> 
            </div>
            </a>
    </Col>
    <Col>  
    <div>
      <Table response="sm">
        <thead>
        <tr>
        <th>ROUND</th>
        <th>TIME</th>
        <th>METHOD</th>
        </tr>

        </thead>
        <tbody>
      <tr>
        <td>5</td>
        <td>5:00</td>
        <td>DEC</td>
        </tr>
        </tbody>

      </Table>
    </div>
     </Col>
    <Col>  <a href="/stats" class="nounderline"><div><h2><br/> <br/> GEOFF</h2> <h2>NEAL</h2> </div> </a> </Col>

    <Col>  <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2019-01/NEAL_GEOFF_R.png?3B1b39m6BVekCGO9V_iiz58_9q_LfJJ.&itok=BjbWlzEU" fluid /> </a></Col>
  </Row>
  <hr/>
  <Row className="oldfightsdiv">
    <Col> <a href="/stats" class="nounderline"><Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2018-10/ALDO_JOSE_L.png?SwFWKrNE1BTrPj2ClCUGsdjKlXayehnF&itok=VHeqDudg" fluid /> </a></Col>
    <Col>  
            <h5 id="win">WIN</h5>
            <a href="/stats" class="nounderline"> 
            <div> 
            <h2> <br/> JOSE</h2> 
            <h2>ALDO</h2>
            </div>
            </a>
    </Col>
    <Col>  
    <div>
      <Table response="sm">
        <thead>
        <tr>
        <th>ROUND</th>
        <th>TIME</th>
        <th>METHOD</th>
        </tr>

        </thead>
        <tbody>
      <tr>
        <td>3</td>
        <td>5:00</td>
        <td>DEC</td>
        </tr>
        </tbody>

      </Table>
    </div>
     </Col>
    <Col>  <a href="/stats" class="nounderline"><div> <h2><br/> <br/> MARLON</h2> <h2>VERA</h2> </div></a></Col>

    <Col>  <a href="/stats" class="nounderline"><Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2020-08/VERA_MARLON_R_08-15.png?yy9M60PHixbbr8RBB6epCj77jQofd6iI&itok=T2SggAOf" fluid /> </a> </Col>

    </Row> 

    <hr/>

    <Row className="oldfightsdiv">
    <Col>  <a href="/stats" class="nounderline"><Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2020-09/PEREIRA_MICHEL_L_05-18.png?bARh3OSS9q7CyhjNqDq48JvpBsfI85TD&itok=P044EhX9" fluid /> </a> </Col>
    <Col>  
            <h5 id="win">WIN</h5>
            <div> 
            <a href="/stats" class="nounderline">
            <h2> <br/> MICHAEL</h2> 
            <h2>PEREIRA</h2>
            </a>
            </div>
    </Col>
    <Col>  
    <div>
      <Table response="sm">
        <thead>
        <tr>
        <th>ROUND</th>
        <th>TIME</th>
        <th>METHOD</th>
        </tr>

        </thead>
        <tbody>
      <tr>
        <td>5</td>
        <td>5:00</td>
        <td>DEC</td>
        </tr>
        </tbody>

      </Table>
    </div>
     </Col>
    <Col> <a href="/stats" class="nounderline"> <div><h2><br/> <br/> KHAOS</h2> <h2>WILLIAMS</h2> </div></a></Col>

    <Col>  <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2020-02/WILLIAMS_KHAOS_R.png?ocW8gRhvG53VGAy2mRTn1ba8v9B.iRgc&itok=FlBXD43_" fluid /> </a> </Col>
  </Row>
  <hr/>

  <Row className="oldfightsdiv">
    <Col> <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2019-08/PETTIS_ANTHONY_L_0.png?5.cy9oUi2OZvVHaXPccGKKv2xD3huZm8&itok=2-GBp-RL" fluid /> </a></Col>
    <Col>   <h5 id="win">WIN</h5>
    <a href="/stats" class="nounderline">
      <div> 
            <h2> <br/> ANTHONY</h2> 
            <h2>PETTIS</h2>
            </div>
            </a>
    </Col>
    <Col>  
    <div>
      <Table response="sm">
        <thead>
        <tr>
        <th>ROUND</th>
        <th>TIME</th>
        <th>METHOD</th>
        </tr>

        </thead>
        <tbody>
      <tr>
        <td>3</td>
        <td>5:00</td>
        <td>DEC</td>
        </tr>
        </tbody>

      </Table>
    </div>
     </Col>
    <Col>             
    <a href="/stats" class="nounderline"><div><h2><br/> <br/> ALEX</h2> <h2>MORONO</h2> </div> </a> </Col>

    <Col> <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2018-10/MORONO_ALEX_R_0.png?h5PM0SHsDdKr8r_xWZLDVXF851si2KC5&itok=y8ufL_qB" fluid /> </a> </Col>
  </Row>
  <hr/>

  <Row className="oldfightsdiv">
    <Col> <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2020-07/TYBURA_MARCIN_L_04-20.png?w8Qke0TyPuMRtxfKJCRFfYlV6aXrNeBL&itok=F1_pya5l" fluid /> </a></Col>
    <Col>  
            <h5 id="win">WIN</h5>
            <a href="/stats" class="nounderline"> 
            <div> 
            <h2> <br/> MARCIN</h2> 
            <h2>TYBURA</h2>
            </div>
            </a>
    </Col>
    <Col>  
    <div>
      <Table response="sm">
        <thead>
        <tr>
        <th>ROUND</th>
        <th>TIME</th>
        <th>METHOD</th>
        </tr>

        </thead>
        <tbody>
      <tr>
        <td>2</td>
        <td>4:30</td>
        <td>KO/TKO</td>
        </tr>
        </tbody>

      </Table>
    </div>
     </Col>
    <Col> <a href="/stats" class="nounderline"> <h2><br/> <br/> GREG</h2> <h2>HARDY</h2> </a></Col>

    <Col> <a href="/stats" class="nounderline"> <Image src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/2020-10/69677%252Fprofile-galery%252Ffullbodyright-picture%252FHARDY_GREG_R_07-20.png?null&itok=2M9g8r31" fluid /> </a> </Col>
  </Row>

</Container>
<hr/>
<div className="fansnotehl"> 
<h1 id="fansnotehltxt" >Fans Comments</h1>
</div><div className="talk">
             
            <textarea maxlength = "90" cols="20" rows="10" type = "text" name="comment" ref={input}/>
            <Button onClick={handleClick}>Create Note</Button>
            <textarea maxlength = "90" cols="30" rows="10" type = "text" name="comment" ref={update}/> 

            <Button onClick={handleUpdate}>Update</Button> 
           
        
            <ul >
                {notes1 ? notes1.map((comment) => (<li key={comment._id}><div id="fannotes"> <h3 id="fantxt"> {comment.comment}</h3> </div>
                <Button onClick = {() => {
                setUpdateID1(comment._id)
                update.current.value = comment.comment
                }}>Edit</Button>
                <Button onClick={() => handleDelete(comment._id)}>Delete</Button>
                </li> )) : null}
            </ul>
        </div>
        </div>
   </> )
}

export default Past
