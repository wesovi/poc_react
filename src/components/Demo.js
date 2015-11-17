/**
 * Created by Ivan on 15/11/15.
 */
import React, { Component,PropTypes } from 'react';
import MyButton from './button/ButtonComponent.jsx'
import ScoreBoard from './scoreboard/ScoreBoard.jsx'
import * as constants from './../modules/matches/constants/index.js';

export default class Demo extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        const { store,mvpStore,teams } = this.props;
        return (
            <div>
                <div>
                    <MyButton message="Start match!"
                              action={() => store.dispatch({ type: constants.START_MATCH })}/>
                </div>
                <ScoreBoard store={store} mvpStore={mvpStore} localTeam={teams[0]} visitorTeam={teams[1]}/>
            </div>
        );
    }
}
Demo.propTypes = {
    store: PropTypes.func,
    mvpStore: PropTypes.func,
    teams: PropTypes.object
}

