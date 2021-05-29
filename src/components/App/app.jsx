import React, { Component } from "react";
import TodoItems from "../todoItems/todoItems";
import TodoSearch from "../todoSearch/todoSearch";
import TodoHeader from "../todoTitle/todoTitle";
import StatusFilter from '../statusFilter/statusFilter';

import './app.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [
                { label: 'Learn Mongo DB', important: true, id: 1 },
                { label: 'Learn Express JS', important: false, id: 2 },
                { label: 'Learn React JS', important: true, id: 3 },
                { label: 'Learn Node JS', important: false, id: 4 },
                { label: 'Learn Next JS', important: false, id: 5 }
            ]
        };


        this.deleteItem = this.deleteItem.bind(this);

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

    render() {

        const { allData } = this.state;

        return (
            <div className="container medium">
                <TodoHeader />
                <div className="d-flex">
                    <TodoSearch />
                    <StatusFilter />
                </div>
                <TodoItems todo={allData}
                    onDeleteClick={this.deleteItem} />
            </div>
        )
    }
}

