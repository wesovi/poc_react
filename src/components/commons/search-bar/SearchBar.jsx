import React from 'react'
import InputText from './../input-text/InputText'
import Button from './../button/Button'

export default class SearchBar extends React.Component {

    render(){
        return (
            <div className="search-bar">
                <InputText/>
                <Button/>
            </div>
        )
    }

}