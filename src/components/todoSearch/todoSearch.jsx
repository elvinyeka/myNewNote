import React, { Component } from 'react';
import './todoSearch.css';

export default class TodoSearch extends Component {

    state = {
        letter: ''
    }
    onSearch = (e) => {
        const letter = e.target.value;
        this.setState({ letter });
        this.props.onSearch(letter);
    }

    render() {

        return (
            <input type='text'
                placeholder='search'
                value={this.state.letter}
                onChange={this.onSearch} />
        )
    }
}

