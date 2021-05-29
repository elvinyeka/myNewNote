import React, { Component } from 'react';
import './todoTitle.css';

export default class TodoHeader extends Component {

    render() {

        const { todo, done } = this.props;
        return (
            <div className="d-flex justify-content-between align-middle">
                <h2>My Todo App</h2>
                <h5>{todo} will be done, {done} done</h5>
            </div>
        )
    }
}


