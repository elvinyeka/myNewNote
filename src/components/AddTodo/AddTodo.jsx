import React, { Component } from 'react';
import './AddTodo.css';


class AddTodo extends Component {
    state = {
        text: ''
    }


    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTodo(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {

        return (
            <form className="add-item mt-3 d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    placeholder="Add New Todo"
                    onChange={this.onTextChange}
                    value={this.state.text} />
                <button className="btn btn-info">Add</button>
            </form>
        );
    }
}

export default AddTodo;



