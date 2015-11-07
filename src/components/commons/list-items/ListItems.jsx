/**
 * Created by Ivan on 7/11/15.
 */
import React from 'react'
import ListItem from './../list-items-item/ListItemsItem'


export default class ListItems extends React.Component {


    render(){
        return (
            <ul>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </ul>
        )
    }

}