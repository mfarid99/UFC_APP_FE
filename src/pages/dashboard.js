import { set } from "mongoose"
import React from "react"
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
<h1>Dashboard</h1>
         
   <Carousel>
  <Carousel.Item interval={1500}>
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

<div className="fights">
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silva
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="/bio">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">VS</h1>
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silvas
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>
<div className="fights">
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silva
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="/bio">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">VS</h1>
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silvas
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>

<div className="fights">
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silva
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="/bio">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">VS</h1>
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silvas
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>

<div className="fights">
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silva
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="/bio">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">VS</h1>
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silvas
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>    
</div>
<hr/>

<div className="fights">
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silva
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="/bio">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>     
<h1 className="vs">VS</h1>
<Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src="https://middleeasy.com/wp-content/uploads/2018/04/1d127b86a952eb5c8a4d52f8f24e9000.jpg" />
  <Card.Body>
    <Card.Title>Midli</Card.Title>
    <Card.Text>
      Anderson Silvas
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Record: 12-2-1</ListGroupItem>
  <ListGroupItem>Country: United States</ListGroupItem>
  <ListGroupItem>Height: 5'11''</ListGroupItem>
  <ListGroupItem>Weight: 175LB</ListGroupItem>
    <ListGroupItem>Reach: 69''</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>    
</div>
   <div>
             
            <h2>New Note</h2>
            <textarea maxlength = "90" cols="60" rows="10" type = "text" name="note" ref={input}/>
            <button onClick={handleClick}>Create Note</button>
            <h2>Update Note</h2>
            <textarea maxlength = "90" cols="60" rows="10" type = "text" name="note" ref={update}/> 

            <button onClick={handleUpdate}>Update</button> 
           
            <h2>Notes</h2>
            <ul>
                {notes ? notes.map((note) => (<li key={note._id}><h3> {note.note}</h3>
                <button onClick = {() => {
                setUpdateID(note._id)
                update.current.value = note.note
                }}>Edit</button>
                <button onClick={() => handleDelete(note._id)}>Delete</button>
                </li> )) : null}
            </ul>
        </div>
    </>)
}

export default Dashboard