import React, {Component, useState, useEffect} from 'react'
import UserNew from "./UserNew";
import axios from "axios";
import URL_Boot from "../../services/url";

const AllUsers = () => {

    useEffect(() => {
        document.title = "View All Users"
    }, []);

    //GET Method
    const getAllUsers = ()=> {
        axios.get('http://localhost:8080/all').then(
            (response) => {
                console.log(response);
                setUsers(response.data);

                },
            (error) => { console.log(error)})
    }

    //Calling GET
    useEffect(()=> {
        getAllUsers();
    }, []);


    //CREATING BLANK ARRAY FOR STORING
    const [users, setUsers] = useState([
        // {name: "Nilesh1", id: "11", salary: "605"},
        // {name: "Ram", id: "12", salary: "705"},
        // {name: "Nilesh1", id: "41", salary: "607"},
    ])


    //removing user from UI
    const removeUserById = (id) => {
        setUsers(users.filter( (c) => c.id !== id));
    }


    return(
        <div>
            <h1> All users </h1>
            {
                users.length>0 ? users.map((item)=> <UserNew key={item.id} user={item} update={removeUserById}/> ): "No users available"
            }
        </div>
    );
}

export default AllUsers;
