import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <h1 className="header">
                {this.props.title}
            </h1>
        )
    }
}
