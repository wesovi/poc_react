'use strict';

import * as constants from '../constants/index.js';
import * as rankingOp from './../../../core/ranking.js';

export default function teams(state = {}, action = constants.SCORE){
    switch (action.type) {
        case constants.SCORE:
            return rankingOp.score(state,action.player,action.points);
        default:
            return state;
    }
}