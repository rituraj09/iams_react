import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function ModalDialog() {

  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
        <Link to={`Vieworder`} className="btn btn-success btn-sm">View</Link> 
            Close
      
          
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog