import React, { useState } from 'react';
import {  Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const Hellow = () => {
     const [text, setText] = useState('Hello World')
        
  const changeText = () => 
      text === 'Hello World' ? setText('Hello Palestine') : setText('Hello World')
      const [isOpen, setIsOpen] = useState(false);

      const showModal = () => {
        setIsOpen(true);
      };
      
      const hideModal = () => {
        setIsOpen(false);
      };

return (
    <>
    <Button className="m-2"  variant='primary' size="lg" onClick={showModal}>Ex 1   </Button>
    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title>EX 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className="success"  onClick={changeText}>
         
         {text}
     </p>


      </Modal.Body>
      <Modal.Footer>
        <Button  variant='danger' onClick={hideModal}>Cancel</Button>
      
      </Modal.Footer>
    </Modal>
  </>

     
      );
}

export default Hellow;
