import React, { Component } from 'react'

export default class CreatureItem extends Component {
    render() {
        return (
            <div className="creature-item">
                <p>{this.props.title}</p>
                <img src={this.props.image} alt=""/>
                <p>{this.props.description}</p>
                <p>Horns: {this.props.horns}</p>
            </div>
        )
    }
}
