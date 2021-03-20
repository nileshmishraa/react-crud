// eslint-disable-next-line no-unused-vars
import React, {Fragment, useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

const AddUser = ()=>{

    const [users, setUsers]= useState({});

    //handle form
    const handleForm = (e)=> {
        console.log(users);
        postData(users);
        e.preventDefault();
    };

    //POST METHOD TO SERVER
    const postData = (data) => {
        axios.post('http://localhost:8080/add', data).then(
            (response) => { console.log(response); },
            (error) => { console.log(error); }
        );
    };

    return(
        <Fragment>
            <h1 className="text-center my-3"> Fill User details</h1>
            <Form onSubmit={handleForm} >
                <FormGroup>
                    <Label for="id"> User Id</Label>
                    <Input type="text" placeholder="Enter Id" name="id" id="id" onChange={
                        (e) => setUsers({ ...users, id: e.target.value })
                    }/>
                </FormGroup>

                <FormGroup>
                    <Label for="name"> Name</Label>
                    <Input type="text" placeholder="Enter name" name="name" id="name" onChange={
                        (e) => setUsers({ ...users, name: e.target.value })
                    }/>
                </FormGroup>

                <FormGroup>
                    <Label for="salary"> Salary</Label>
                    <Input type="text" placeholder="Enter Salary" name="salary" id="salary" onChange={
                        (e) => setUsers({ ...users, salary: e.target.value })
                    }/>
                </FormGroup>

                <Container>
                    <Button type="submit" color="success"> Add</Button>
                    <Button type="reset" color="danger ml-3"> Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddUser;
