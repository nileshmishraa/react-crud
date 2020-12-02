import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, Container} from 'reactstrap';

class User extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardSubtitle> User Name </CardSubtitle>
                    <CardText> ID - 1</CardText>
                    <CardText> Salary - 600</CardText>
                    <Container>
                        <Button color="danger"> Delete</Button>
                        <Button color="warning ml-3" > Update</Button>
                    </Container>
                </CardBody>
            </Card>
        );
    }
}

export default User;
