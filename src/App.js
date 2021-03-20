
import './App.css';
import React from "react";
//import HeaderNew from "./components/ComponentsNew/HeaderNew";
import Home from "./components/ComponentsNew/Home";
import AllUsers from "./components/ComponentsNew/AllUsers";
import AddUser from "./components/ComponentsNew/AddUser";
import {Col, Container, Row} from "reactstrap";
import HeaderNew from "./components/ComponentsNew/HeaderNew";
import Menu from "./components/ComponentsNew/menu";
import {BrowserRouter as Router, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
        <Router>
            <Container>
                <HeaderNew/>
                <Row>
                    <Col md={4}><h2> <Menu/></h2> </Col>
                    <Col md={8}>
                        <Route path="/" component={Home} exact/>
                        <Route path="/add-user" component={AddUser} exact/>
                        <Route path="/view-user" component={AllUsers} exact/>
                    </Col>
                </Row>
            </Container>
        </Router>
    </div>
  );
}

export default App;
