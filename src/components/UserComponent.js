import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.addUser = this.addUser.bind(this);    //event handling -> need to check more
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data} )
        });
    }

    addUser(){
        this.props.history.push('/add');
    }

    render (){
        return (
            <div>
                {/*<h3 className = "text-center"> Users List</h3>*/}
                <div className="row">
                    <button className="btn-primary" onClick={this.addUser}>Add Users</button>
                </div>
                <table className = "table table-striped">
                    <thead>
                    <tr>

                        <td> User Id</td>
                        <td> User Name</td>
                        <td> User Salary</td>
                        <td> Actions</td>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.name}</td>
                                    <td> {user.salary}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent


