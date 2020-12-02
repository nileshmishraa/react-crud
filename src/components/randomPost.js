import React from 'react';
import axios from 'axios';

export default class randomPost extends React.Component {
    state = {
        id: '',
        name: '',
        salary: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleIdChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSalaryChange = event => {
        this.setState({ salary: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            salary: this.state.salary,
            id: this.state.salary
        };

        axios.post(`http://localhost:8080/add`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Id:
                        <input type="text" name="id" onChange={this.handleIdChange} />
                    </label>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label><label>
                        Person Salary:
                        <input type="text" name="salary" onChange={this.handleSalaryChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }


}
