/**
 * Created by Ivan on 15/11/15.
 */

import React, { Component, PropTypes } from 'react';



export default class PlayerListComponent extends Component {

    constructor(props) {
        super(props);
    }

    className(){
        return 'combo';
    }

    render(){
        return (
            <select className={this.className()}>
                {
                    this.props.elements.map(function(option)
                    {
                        return (
                            <option value={option.code}>
                                {option.name}
                            </option>
                        )
                    })
                }
            </select>
        );
    }
}

PlayerListComponent.propTypes = {
    elements: PropTypes.string
};
PlayerListComponent.defaultProps = { elements: []};