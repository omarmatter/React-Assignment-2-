import { useState } from "react"
import { Form, Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const Change = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const userNameChange = (event) => {
        setUserName(event.target.value);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
    }
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button className="m-2" variant='info' size="lg" onClick={showModal}>Ex 2          </Button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>EX 2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="container">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username : {userName}</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                name="userName"

                                value={userName}
                                onChange={userNameChange}
                                autoComplete="false"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email :{email}</Form.Label>
                            <Form.Control type="email" placeholder="Password"
                                name="email"
                                value={email}
                                onChange={emailChange}
                                autoComplete="false"
                            />
                        </Form.Group>

                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={hideModal}>Cancel</Button>

                </Modal.Footer>
            </Modal>
        </>



    )
}

export default Change