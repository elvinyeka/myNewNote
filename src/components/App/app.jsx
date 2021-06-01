import React, { Component } from "react";
import TodoItems from "../todoItems/todoItems";
import TodoSearch from "../todoSearch/todoSearch";
import TodoHeader from "../todoTitle/todoTitle";
import StatusFilter from '../statusFilter/statusFilter';

import './app.css';
import AddTodo from "../AddTodo/AddTodo";



export default class App extends Component {

    maxId = 100;

    state = {
        allData: [
            { label: 'Learn Mongo DB', important: true, id: 1 },
            { label: 'Learn Express JS', important: false, id: 2 },
            { label: 'Learn React JS', important: true, id: 3 },
            { label: 'Learn Node JS', important: false, id: 4 },
            { label: 'Learn Next JS', important: false, id: 5 }
        ],
        letter: '',
        filter: 'active'

    }

    deleteItem = (id) => {
        this.setState(({ allData }) => {
            const index = allData.findIndex(elem => elem.id === id);

            const before = allData.slice(0, index);
            const after = allData.slice(index + 1);

            const newData = [...before, ...after]

            return {
                allData: newData
            }
        })
    }

    addTodo = (text) => {

        const newData = {
            label: text,
            important: false,
            id: this.maxId++,
        }
        this.setState(({ allData }) => {

            const newArr = [
                ...allData,
                newData
            ];
            return { allData: newArr }
        })
    }

    doneTodo = (id) => {
        this.setState(({ allData }) => {
            const index = allData.findIndex(e => e.id === id);
            const currentItem = allData[index];
            const doneItem = {
                ...currentItem,
                done: !currentItem.done
            };

            const newArr = [
                ...allData.slice(0, index),
                doneItem,
                ...allData.slice(index + 1)
            ]

            return {
                allData: newArr
            }
        })
    }

    doneImportant = (id) => {
        this.setState(({ allData }) => {
            const index = allData.findIndex(e => e.id === id);
            const currentItem = allData[index];
            const doneItem = {
                ...currentItem,
                important: !currentItem.important
            };

            const newArr = [
                ...allData.slice(0, index),
                doneItem,
                ...allData.slice(index + 1)
            ]

            return {
                allData: newArr
            }
        })
    }

    onSearch = (letter) => {
        this.setState({ letter })

    }
    search(item, letter) {
        if (letter.lenght === 0) {
            return item
        }
        return item.filter(item => {
            return item.label.toLowerCase().indexOf(letter.toLowerCase()) > -1
        })
    }

    filter(item, filter) {
        switch (filter) {
            case 'all':
                return item;
            case 'active':
                return item.filter(item => !item.done);
            case 'done':
                return item.filter(item => item.done);
            default:
                return item;
        }
    }

    onFilter = (filter) => {
        this.setState({ filter })
    }

    render() {

        const { allData, letter, filter } = this.state;
        const getData = this.filter(this.search(allData, letter), filter);
        const doneElement = allData.filter(elem => elem.done).length;
        const todoElement = allData.length - doneElement;

        return (
            <div className="container medium">
                <TodoHeader todo={todoElement} done={doneElement} />
                <div className="d-flex">
                    <TodoSearch
                        onSearch={this.onSearch} />
                    <StatusFilter
                        onFilter={this.onFilter}
                        filter={filter} />
                </div>
                <AddTodo onAddTodo={this.addTodo} />
                <TodoItems todo={getData}
                    onDeleteClick={this.deleteItem}
                    doneTodo={this.doneTodo}
                    doneImportant={this.doneImportant} />
            </div>
        )
    }
}

