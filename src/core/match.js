/**
 * Created by Ivan on 17/11/15.
 */
export function startMatch(){
    return {
        local:{
            score: 0
        },
        visitor:{
            score: 0
        }
    };
}

export function score(scoreboard,team,scoring){

    return {
        local:{
            score: (team==='local')?scoreboard.local.score + scoring:scoreboard.local.score + 0
        },
        visitor:{
            score: (team==='visitor')?scoreboard.visitor.score + scoring:scoreboard.visitor.score + 0
        }
    };
}