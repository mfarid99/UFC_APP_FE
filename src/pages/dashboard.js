import { set } from "mongoose"
import React from "react"
import {GlobalCtx} from "../App"
import {Carousel, Jumbotron, Button} from 'react-bootstrap'
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

         
   <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/10/30/Pictures/ufc-254-preview-mixed-martial-arts_1de96cea-1abd-11eb-bfd3-008a2bae3f6c.jpg"
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
      src="https://sportshub.cbsistatic.com/i/r/2018/10/01/ea7fe27f-3888-4814-80b1-82d1c4a6803d/thumbnail/1200x675/8d379dae8f7d540f422e6e7cc14821f0/khabib-nurmagomedov.jpg"
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
      src="https://cdn.newsday.com/polopoly_fs/1.39685824.1601404661!/httpImage/image.jpg_gen/derivatives/landscape_1280/image.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <div>
            <h1>Dashboard</h1> 
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