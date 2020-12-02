// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {Button, Container, Jumbotron} from "reactstrap";

function Home() {
    return(
        <div>
            <Jumbotron className="text-center">
                <h1>CRUD Operations with React & Spring boot</h1>
                <Container>
                    <Button color="primary m-3" outline> Start using </Button>
                </Container>
            </Jumbotron>

        </div>
    );
}
export default Home;
