import React, { Component } from 'react';
import CreatureItem from './CreatureItem.js';
import {capitalize} from './utils.js';

export default class CreaturesList extends Component {
    state = {
        keywordFilter: '',
        hornsFilter: 0,
    }

    handleKeywordFilter = e => {
        this.setState({
            keywordFilter: e.target.value
        })
    }

    handleHornsFilter = e => {
        this.setState({
            hornsFilter: Number(e.target.value)
        })
    }

    render() {
        const filteredCreatures = this.props.creatures.filter((creature) => {
            const keyword = this.state.keywordFilter
            const hornCount = this.state.hornsFilter

            
            if (!keyword || !hornCount) {
                if (!keyword && !hornCount) {
                    return true
                }
                if (keyword) {
                    if (!hornCount && creature.keyword === keyword) {
                        return true
                    }
                    if (creature.horns === hornCount && creature.keyword === keyword) {
                        return true
                    }
                    return false
                }
                if (creature.horns === hornCount) {
                    return true
                }
            }

            if (creature.keyword === keyword && creature.horns === hornCount) {
                return true
            }

            return false
        })

        const creatureKeywords = [...new Set(this.props.creatures.map(creature => creature.keyword))]

        const creatureHorns =[...new Set(this.props.creatures.map(creature => creature.horns))]

        return (
            <>
            <div>
                <select onChange={this.handleKeywordFilter}>
                    <option value="">All Creatures</option>

                    {
                    // Render an option for each key in the creatureKeywords
                        creatureKeywords.map(key => {
                            return <option value={key}>{capitalize(key)}</option>
                        })
                    }

                </select>

                <select onChange={this.handleHornsFilter}>
                    <option value="">All Horn Counts</option>

                    {
                        // Render an option for each horns count
                        creatureHorns.map(horns => {
                            return <option value={horns}>{horns}</option>
                        })
                    }
                </select>
            </div>

            <div className="creatures-list">

                {
                // Add a CreatureItem for each creature in the hornedCreatures array
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
