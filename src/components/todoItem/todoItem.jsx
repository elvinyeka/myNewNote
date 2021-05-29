import React, { Component } from 'react';
import './todoItem.css';


export default class TodoItem extends Component {
    state = {
        done: false,
        important: false
    }

    onTextClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }

    onImportantClick = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render() {

        const { label, onDeleteClick } = this.props;
        const { done, important } = this.state;

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

                    onClick={this.onTextClick}>
                    {label}
                </span>
                <div>
                    <button className="btn btn-danger"
                        onClick={onDeleteClick}>Sil</button>
                    <button
                        className="btn btn-success"
                        onClick={this.onImportantClick}>!</button>
                </div>
            </div>

        )
    }
}

