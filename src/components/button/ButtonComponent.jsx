/**
 * Created by Ivan on 15/11/15.
 */

import React, { Component, PropTypes } from 'react';



export default class ButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    className(){
        return 'button-component big red';
    }

    render(){
        const { message, action } = this.props;
        return (
            <button className={this.className()}
                    onClick={action}>
                {message}
            </button>
        );
    }
}

ButtonComponent.propTypes = {
    action: PropTypes.func.isRequired,
    message: PropTypes.string
};
ButtonComponent.defaultProps = { message: 'Default button' };