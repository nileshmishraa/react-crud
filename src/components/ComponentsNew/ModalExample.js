import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddUser from "./AddUser";
// import AllUsers from "./AllUsers";
// import axios from "axios";

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <AddUser/>
                </ModalBody>
                {/*<ModalFooter>*/}
                {/*    <Button color="warning ml-3">Update</Button>*/}
                {/*    <Button color="secondary" onClick={toggle}>Cancel</Button>*/}
                {/*</ModalFooter>*/}
            </Modal>
        </div>
    );
}

export default ModalExample;
