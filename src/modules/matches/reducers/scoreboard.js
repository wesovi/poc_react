'use strict';

import * as constants from '../constants/index.js';
import * as matchOp from './../../../core/match.js';

export default function scoreboard(state = {}, action = constants.START_MATCH){
    switch (action.type) {
        case constants.START_MATCH:
            return matchOp.startMatch();
        case constants.SCORE:
            return matchOp.score(state,action.team,action.points);
        default:
            return state;
    }
}