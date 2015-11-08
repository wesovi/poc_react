/**
 * Created by Ivan on 7/11/15.
 */
import React, { Component, PropTypes } from 'react'


export default class ListItemsItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return <li>{this.props.name}</li>
    }

}