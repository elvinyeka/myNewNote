import React, { Component } from 'react';
import './todoItem.css';


export default class TodoItem extends Component {


    render() {

        const { label, onDeleteClick, doneImportant, doneTodo, done, important } = this.props;


        let classNames = 'todo';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <div className="d-flex justify-content-between">
                <span
                    className={classNames}

                    onClick={doneTodo}>
                    {label}
                </span>
                <div>
                    <button className="btn btn-danger"
                        onClick={onDeleteClick}>Sil</button>
                    <button
                        className="btn btn-success"
                        onClick={doneImportant}>!</button>
                </div>
            </div>

        )
    }
}

