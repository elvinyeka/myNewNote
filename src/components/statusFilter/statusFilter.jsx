import React, { Component } from "react";


export default class StatusFilter extends Component {

    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-info">Hamısı</button>
                <button className="btn btn-outline-primary">Aktiv</button>
                <button className="btn btn-outline-success">Bitən</button>
            </div>
        )
    }
}