import React, { Component } from 'react';
import CreatureItem from './CreatureItem.js';
import {capitalize} from './utils.js';

export default class CreaturesList extends Component {
    state = {
        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        })
    }

    render() {
        const filteredCreatures = this.props.creatures.filter((creature) => {
            if (!this.state.filter) return true;

            if (creature.keyword === this.state.filter) return true;

            return false;
        })

        const creatureKeywords = [...new Set(this.props.creatures.map(creature => creature.keyword))]

        return (
            <>
            <div>
                <select onChange={this.handleChange}>
                    <option value="show-all">Show All</option>
                    {
                        creatureKeywords.map(key => {
                            return <option value={key}>{capitalize(key)}</option>
                        })
                    }
                </select>
            </div>
            <div className="creatures-list">
                {
                    filteredCreatures.map(creature =>
                        <CreatureItem
                            title = {creature.title}
                            image = {creature.url}
                            description = {creature.description}
                            horns = {creature.horns}
                        />
                    )
                }
            </div>
            </>
        )
    }
}
