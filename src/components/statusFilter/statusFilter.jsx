import React, { Component } from "react";


export default class StatusFilter extends Component {

    buttons = [
        { name: 'all', text: 'All' },
        { name: 'active', text: 'Active' },
        { name: 'done', text: 'Done' },
    ]

    render() {
        const { filter, onFilter } = this.props;
        const buttons = this.buttons.map(({ name, text }) => {
            const isActive = (filter === name);
            const classes = isActive ? 'btn-info' : 'btn-outline-primary';
            return (
                <button key={name}
                    className={`btn ${classes}`}
                    onClick={() => onFilter(name)}>{text}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}