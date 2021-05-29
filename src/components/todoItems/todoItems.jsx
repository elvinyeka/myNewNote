import React, { Component } from 'react';
import TodoItem from '../todoItem/todoItem';

import './todoItems.css';


export default class TodoItems extends Component {

    render() {
        const { todo, onDeleteClick } = this.props;
        const element = todo.map((item) => {
            const { id, ...itemProps } = item
            return (
                <li key={item.id} className="list-group-item">
                    <TodoItem {...itemProps}
                        onDeleteClick={() => onDeleteClick(id)} />
                </li>
            )
        });
        return (
            <ul className="list-group todolist mt-3">
                {element}
            </ul>
        )
    }

}

