import React, { Component } from 'react';
import './todoSearch.css';

export default class TodoSearch extends Component {

    render() {
        const searchText = 'search something';
        const searchStyle = {
            fontSize: '22px'
        }
        return (
            <input
                type="text"
                placeholder={searchText}
                style={searchStyle}
            />
        )
    }
}

