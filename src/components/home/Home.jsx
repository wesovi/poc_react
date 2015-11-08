import React from 'react'
import ListItems from './../commons/list-items/ListItems'
import ListItem from './../commons/list-items-item/ListItemsItem'

export default class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <ListItems/>
        )
    }

}