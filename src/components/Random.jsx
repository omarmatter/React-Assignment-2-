import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";


const Random = () => {

    const sentences = [
        'Do you love ReactJs?',
        'JavaScript is the Best',
        'Have a nice DAY',
        'Free Palestine',
        'You can do a lot of funny by JavaScript',
        'React is Framework',
        'BootStrap is Laibrary from CSS',
        'React made by Facebook',
        '(FullStack) coming soon',
        'The Program is funny',
        'Enjoy your time!'
    ];
    const colors =[
        'primary', 
        'secondary',
         'success', 
         'danger', 
         'warning', 
         'info', 
         'dark', 
         'light', 
        
    ]

    const [text, setText] = useState(sentences[Math.floor(Math.random() * sentences.length)]);
    const [color, setcolor] = useState('primary')

    const changeSentence = () => {
        setText(sentences[Math.floor(Math.random() * sentences.length)])
        setcolor(colors[Math.floor(Math.random() * colors.length)])
    };
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
    
    const hideModal = () => {
      setIsOpen(false);
    };

    return (
        <>
        <Button  className="m-2" variant='warning' size="lg" onClick={showModal}>Ex 3   </Button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>EX 3</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
            <Button variant={color} onClick={changeSentence}> {text}</Button>
           
        </div>
    

          </Modal.Body>
          <Modal.Footer>
            <Button  variant='danger' onClick={hideModal}>Cancel</Button>
          
          </Modal.Footer>
        </Modal>
      </>
    
      
    )

}

export default Random