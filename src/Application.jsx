/**
 * Created by Ivan on 7/11/15.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './components/Demo'
import { createStore } from 'redux'
import scoreboardReducer from './modules/matches/reducers/scoreboard'
import mvpReducer from './modules/rankings/reducers/mvp'
import * as teamsOp from './core/team'

let scoreboardStore = createStore(scoreboardReducer, {
    local:{
        score: 0
    },
    visitor:{
        score: 0
    }
});
let mvpStore = createStore(mvpReducer,{});

const teams = teamsOp.listOfTeams()

ReactDOM.render(<Demo store={scoreboardStore} mvpStore={mvpStore} teams={teams}/>, document.body);