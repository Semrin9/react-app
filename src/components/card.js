import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ModalHeader } from "react-bootstrap";


function CardComp(props) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Card style={{ width: "16rem", margin: "auto" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center"}}>{props.title}</Card.Title>
          <Card.Text style={{ fontWeight: "bold", textAlign:"center",fontSize:"20px"}}>Category: {props.Category}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Show Recipe</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CardComp;