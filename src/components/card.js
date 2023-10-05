import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuth0 } from '@auth0/auth0-react';


function CardComp(props) {
  const [show, setShow] = useState(false);
  let {user, isAuthenticated} = useAuth0()

  const handleShow = () => setShow(!show);

  function saveToLocalStorage (){

    if(localStorage.getItem("favorites")){

    let stringData = localStorage.getItem("favorites");
    let arr = JSON.parse(stringData);
    arr.push({...props, email:user.email});

    // -----------------------------

    let stringedData = JSON.stringify(arr);

    localStorage.setItem("favorites", stringedData);
  }
    else {

      let arr = [];
      arr.push({...props, email:user.email});
      let stringedData = JSON.stringify(arr);
  
      localStorage.setItem("favorites", stringedData);

    }
  }


  return (
    <>
      <Card style={{ width: "16rem", margin: "auto" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center"}}>{props.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>Show Recipe</Button>
          {isAuthenticated && props.showFavorites?
            <Button onClick={saveToLocalStorage} style={{display:"none"}}>Add to Favorites</Button>
            :
            <Button onClick={saveToLocalStorage}>Add to Favorites</Button>
          
          }
          {props.showDelete?
            <Button onClick={props.handleDelete}>Delete</Button>
            :
            <Button onClick={props.handleDelete} style={{display:"none"}}>Delete</Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton onClick={handleShow}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CardComp;