import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Menu = () => {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action="true"> Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-user" action> View Users</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-user" action> Add User</Link>
        </ListGroup>
    );
}

export default Menu;
