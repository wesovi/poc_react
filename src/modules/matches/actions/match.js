'use strict';

import * as constants from '../constants/index.js';

export function startMatch(){
    return {
        type: constants.START_MATCH
    }
}

export function score(){
    return {
        type: constants.SCORE
    }
}

