import React, { Component } from 'react';
import CreatureItem from './CreatureItem.js';

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
        return (
            <>
            <div>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='narwhal'>Narwhals</option>
                    <option value='rhino'>Rhino</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='unilego'>Unilego</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='addax'>Addax</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='dragon'>Dragon</option>
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
