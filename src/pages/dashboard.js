import { set } from "mongoose"
import React from "react"
import {Link} from "react-router-dom"
import {GlobalCtx} from "../App"
import {Carousel, Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, ListGroupItem, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState
    const [notes, setNotes] = React.useState(null)
    const [updateID, setUpdateID] = React.useState(null)

    const getNotes  = async () => {
        const response = await fetch(url + "/note/", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const json = await response.json()
        setNotes(json)
    }
    React.useEffect(()=> {
        getNotes()
    }, [])

    const input = React.useRef(null)
    const update = React.useRef(null)

    const handleClick = (event) => {
        console.log(input)
        const note = input.current.value

        fetch(url + "/note/", {
            method: "post",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `bearer ${token}`
            }, 
            body: JSON.stringify({note})
        })
            .then(response => response.json())
            .then(data => {
                input.current.value=""
                getNotes ()
            })
        
    };

    const handleUpdate = () => {
        console.log(input)
        const note = update.current.value

        fetch(url + "/note/" + updateID, {
            method: "put",
            headers: {
                "Content-Type": "application/json", 
                Authorization: `bearer ${token}`
            }, 
            body: JSON.stringify({note})
        })
            .then(response => response.json())
            .then(data => {
                update.current.value=""
                setUpdateID(null)
                getNotes ()
            })
        
    };

    const handleDelete = (id) => {
    

        fetch(url + "/note/" + id, {
            method: "delete",
            headers: {
                Authorization: `bearer ${token}`
            }, 
        })
            .then(response => response.json())
            .then(data => {
                getNotes ()
            })
        
    }


    return (<>
    <div className="dashdiv"> 
<h1 id="dashtxt">UPCOMING EVENT</h1>
         <div className="caroudash"> 
   <Carousel>
      
       <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src= "https://i.imgur.com/GeFHZQp.jpg"
      alt="UFC 299"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://sportshub.cbsistatic.com/i/r/2019/09/06/5b3f6cf9-2a2d-4a9a-8b4e-3957cac770bc/thumbnail/1200x675/2260a19670823b964e07e06516120d2d/khabib-weighin.jpg"
      alt="Khabib"
    />
    <Carousel.Caption>
      <h3>The Champ </h3>
      <p>Khabib "The Eagle" Nurmagomedov</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://www.monsterenergy.com/media/uploads_image/2020/01/19/1600/800/571dadc12c3b94df40c354c6424528d3.jpg?mod=v1_f10d70348afc8e5bab81342e1c962db5"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>The Challenger</h3>
      <p>Conor "Notorious" McGregor</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.sportsnet.ca/wp-content/uploads/2020/05/jon-jones-ufc-1040x572.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3>Heavyweight Contender</h3>
      <p>Jon "Bones" Jones</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200314224942/Francis-Ngannou.jpg"
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>Heavyweight Contender</h3>
      <p>Francis Ngannou</p>
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
</div>

<div className="fights">
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline">
<Card.Img variant="top" src="https://cdn.readeverything.co/wp-content/uploads/sites/56/2020/04/228-1.jpg" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline">
 <Card.Title> Max Hollaway</Card.Title> </Link>
    <Card.Text> Lightweight
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 21-6-0</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 145LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>    
 
<h1 className="vs">Vs.</h1>
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline">
<Card.Img variant="top" src="https://sportsmanila.net/images/ufc/2018/feb/Brian-Ortega.jpg" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline">
 <Card.Title>  Brian Ortega</Card.Title> </Link>
    <Card.Text> Lightweight
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 15-1-0</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'8''</ListGroupItem>
  <ListGroupItem>Weight: 145LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>
<div className="fights">
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline">
<Card.Img variant="top" src="https://i.pinimg.com/originals/4c/82/66/4c826618e3e62fe5e40f8e330ce09c33.jpg" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline">
<Card.Title>  Amanda Nunes </Card.Title> </Link>
    <Card.Text> Featherweight Champ
   </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 20-4-0</ListGroupItem>
  <ListGroupItem>Country: Brazil</ListGroupItem>
  <ListGroupItem>Height: 5'8''</ListGroupItem>
  <ListGroupItem>Weight: 145LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">Vs.</h1>
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline">
<Card.Img variant="top" src="https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/methode/2020/04/29/0d0d8738-89bf-11ea-8a72-3b4a65ec119d_image_hires_110826.jpeg?itok=-MOhmLM0&v=1588129714" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline">
 <Card.Title>Morgan Anderson</Card.Title> </Link>
    <Card.Text>
Featherweight Challenger    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 11-4-0</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 6'0''</ListGroupItem>
  <ListGroupItem>Weight: 145LB</ListGroupItem>
    <ListGroupItem>Reach: 72''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>

<div className="fights">
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline">
<Card.Img variant="top" src="https://www.essentiallysports.com/wp-content/uploads/tj1.jpg" /> </Link>
  <Card.Body>
  <a href="/stats" class="nounderline"><Card.Title>      TJ Dillashaw
</Card.Title> </a>
    <Card.Text>Bantamweight
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 17-4-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'6''</ListGroupItem>
  <ListGroupItem>Weight: 135LB</ListGroupItem>
    <ListGroupItem>Reach: 67''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">Vs.</h1>
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline"><Card.Img variant="top" src="https://s.yimg.com/ny/api/res/1.2/AbrQAzNg4c8tsljtJC0cmA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzMzQuMjU5OTAyNzEwMjE1Mw--/https://s.yimg.com/uu/api/res/1.2/lhmt9hnKn6C48MtahQUwMQ--~B/aD0yMDAwO3c9MTQzOTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/people_218/74a5d0565114100dada303adab95ec66" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline"><Card.Title>   Cody Garbrandt
</Card.Title> </Link>
    <Card.Text>  Bantamweight
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-3-0</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'8''</ListGroupItem>
  <ListGroupItem>Weight: 135LB</ListGroupItem>
    <ListGroupItem>Reach: 65''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>

<div className="fights">
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline"><Card.Img variant="top" src="https://bc.marfeelcache.com/statics/i/ps/storage.googleapis.com/thisday-846548948316-wp-data/wp-media/2020/05/e81c5df8-kamaru-usman.jpg?width=1200&enable=upscale" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline"><Card.Title>Kamaru Usman</Card.Title> </Link>
    <Card.Text>
Welterweight Champ    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 17-1-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 6'0''</ListGroupItem>
  <ListGroupItem>Weight: 170LB</ListGroupItem>
    <ListGroupItem>Reach: 76''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">Vs.</h1>
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline"><Card.Img variant="top" src="https://www.kindpng.com/picc/m/545-5456378_img-robbie-lawler-vs-colby-covington-hd-png.png" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline"><Card.Title>Colby Covington</Card.Title> </Link>
    <Card.Text>
Welterweight Challenger    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 16-2-0</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 170LB</ListGroupItem>
    <ListGroupItem>Reach: 72''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>

<div className="fights">
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline"><Card.Img variant="top" src="https://i.imgur.com/9NrAt8t.jpg" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline"><Card.Title>Weili Zhang</Card.Title> </Link>
    <Card.Text>
Strawweight Champ    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 21-1-0</ListGroupItem>
  <ListGroupItem>Country: China</ListGroupItem>
  <ListGroupItem>Height: 5'4''</ListGroupItem>
  <ListGroupItem>Weight: 115LB</ListGroupItem>
    <ListGroupItem>Reach: 63''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">Vs.</h1>
<Card style={{ width: '50rem' }}>
<Link to="/stats" class="nounderline"><Card.Img variant="top" src="https://i.imgur.com/cyxPQtW.jpg" /> </Link>
  <Card.Body>
  <Link to="/stats" class="nounderline"><Card.Title>Rose
Namajunas</Card.Title> </Link>
    <Card.Text>
Strawweight Challenger    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 10-4-0</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'5''</ListGroupItem>
  <ListGroupItem>Weight: 115LB</ListGroupItem>
    <ListGroupItem>Reach: 65''</ListGroupItem>

  </ListGroup>
  <Card.Body>
  <Card.Link href="/bio">BIO</Card.Link>
  </Card.Body>
</Card>    
</div>
<div className="fansnotehl"> 
<h1 id="fansnotehltxt" >Fans Comments</h1>
</div>
<div className="talk">
             
             <textarea maxlength = "90" cols="20" rows="10" type = "text" name="note" ref={input}/>
             <Button onClick={handleClick}>Create Note</Button>
             <textarea maxlength = "90" cols="30" rows="10" type = "text" name="note" ref={update}/> 
 
             <Button onClick={handleUpdate}>Update</Button> 
            
         
             <ul >
                 {notes ? notes.map((note) => (<li key={note._id}><div id="fannotes"> <h3 id="fantxt"> {note.note}</h3> </div>
                 <Button onClick = {() => {
                 setUpdateID(note._id)
                 update.current.value = note.note
                 }}>Edit</Button>
                 <Button onClick={() => handleDelete(note._id)}>Delete</Button>
                 </li> )) : null}
             </ul>
         </div>
         </div>
    </>)
}

export default Dashboard