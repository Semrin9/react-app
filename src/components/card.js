import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function CardComp(props) {
  const [show, setShow] = useState(false);


  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center"}}>
            {props.title}
          </Card.Title>
          <Card.Text>write a description</Card.Text>
          <Button variant="primary" onClick={handleShow}>View Recipe </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}> 
            Close
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CardComp;