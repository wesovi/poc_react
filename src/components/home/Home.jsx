import React from 'react'
import ListItems from './../commons/list-items/ListItems'
import ListItem from './../commons/list-items-item/ListItemsItem'

export default class Home extends React.Component {

    render(){
        return (
            <ListItems>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </ListItems>
        )

    }

}