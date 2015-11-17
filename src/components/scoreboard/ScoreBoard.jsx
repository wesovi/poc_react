/**
 * Created by Ivan on 15/11/15.
 */
import React, { Component, PropTypes } from 'react';
import MyButton from './../button/ButtonComponent.jsx'
import PlayerList from './../players/PlayerListComponent.jsx'
import * as constants from './../../modules/matches/constants/index.js';

export default class ScoreBoardComponent extends Component {

    constructor(props) {
        super(props);
    }

    score(team,points){
        const {store} = this.props;
        store.dispatch({
            type: constants.SCORE,
            points:points,
            team:team
        })
    }



    render(){
        let { store, localTeam,visitorTeam } = this.props;

        let state = store.getState();
        store.subscribe(function fetcher() {
            state = store.getState();
            console.log('updating.. '+state.local.score);
            //document.getElementById('localTeamScoreId').value=state.local.score;
            document.getElementById('visitorTeamScoreId').value=state.visitor.score;
        });
        return (

            <div className="scoreboard-component">
                <div className="panel local">
                    <h3>{localTeam.name}</h3>
                    <input type="number" id="localTeamScoreId" value={state.local.score}/>
                    <PlayerList elements={localTeam.players} />
                    <MyButton message="+1"
                        action={() => this.score('local',1)}
                    />
                    <MyButton message="+2"
                        action={() => this.score('local',2)}
                    />
                    <MyButton message="+3"
                        action={() => this.score('local',3)}
                    />
                </div>
                <div className="panel visitor">
                    <h3>{visitorTeam.name}</h3>
                    <input type="number" id="visitorTeamScoreId"/>
                    <PlayerList elements={visitorTeam.players} />
                    <MyButton message="+1"
                        action={() => this.score('visitor',1)}
                    />
                    <MyButton message="+2"
                        action={() => this.score('visitor',2)}
                    />
                    <MyButton message="+3"
                        action={() => this.score('visitor',3)}
                    />
                </div>
            </div>
        );
    }
}
ScoreBoardComponent.propTypes = {
    store: PropTypes.func.isRequired,
    mvpStore: PropTypes.func,
    localTeam: PropTypes.object,
    visitorTeam: PropTypes.object
};


