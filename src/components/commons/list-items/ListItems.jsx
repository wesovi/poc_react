/**
 * Created by Ivan on 7/11/15.
 */
import React, { Component, PropTypes } from 'react'
import ListItem from './../list-items-item/ListItemsItem'


export default class ListItems extends Component {

    constructor(props) {
        super(props);
        this.items = ListItems._defaultItems();
        this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
    }

    static _defaultItems(){
        return [
            {
                code: 1,
                value: 'My element'
            },{
                code: 2,
                value: 'My another element'
            }
        ];
    }

    handleOptionsButtonClick(e){
        this.setState({showOptionsModal: true});
    }

    render(){
        return (
            <ul>
            {
                this.items.map(function(item) {
                    return <ListItem name={item.code} />
                })
            }
            </ul>
        )
    }

}
ListItems.defaultProps = { numberOfElements: 0 };
ListItems.propTypes = {items: PropTypes.array};

