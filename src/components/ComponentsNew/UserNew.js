import React, {Component, useEffect} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, Container} from "reactstrap";
import axios from "axios";
import URL_Boot from "../../services/url";



const UserNew = ({user, update })=> {
//parameter update is from AllUsers.js which is deleting the elements from UI
    const deleteUser = (id) => {
        axios.delete(`${URL_Boot}/delete/${id}`).then(
            (response) => {
                console.log(response);
                update(id);
            },
            (error) => { console.log(error) }
        );
    }

    return (
        <Card>
            <CardBody>
                <CardSubtitle className="font-weight-bold">{user.name}</CardSubtitle>
                <CardText>{user.id}</CardText>
                <CardText>{user.salary}</CardText>
                <Container>
                    <Button color="danger" onClick = {
                        () =>{ deleteUser(user.id) }

                    }>Delete</Button>
                    <Button color="warning ml-3"> Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default UserNew;
