import React, {useEffect, useState, Fragment} from "react";
import {Player} from "./Player";
import {battle} from "../../utils/api";
import {Spinner} from "../shared/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {setError, setLoading, setLoser, setWinner} from "../../redux/actions/results.actions";

const Results = (props) => {
    const winnerFromState = useSelector(state => state.resultsReducer.winner);
    const looserFromState = useSelector(state => state.resultsReducer.loser);
    const loadingFromState = useSelector(state => state.resultsReducer.loading);
    const errorFromState = useSelector(state => state.resultsReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get('playerOneName');
        const playerTwoName = searchParams.get('playerTwoName');

        battle([playerOneName, playerTwoName])
            .then(([winner, loser]) => {
                if(winner && loser) {
                    dispatch(setWinner(winner));
                    dispatch(setLoser(loser));
                } else {
                    dispatch(setError('Looks like this is an error. Check both users!'));
                }
            })
            .finally(() => {
                dispatch(setLoading(false));
            })

    }, []);

    if(errorFromState) {
        return <h3>{errorFromState.message}</h3>
    }

    if(loadingFromState) {
        return <Spinner height="100" width="100" color="#ffe07d"/>
    }

    return (
        <div className='row'>
            {winnerFromState && looserFromState &&
                <Fragment>
                    <Player
                        label='Winner'
                        score={winnerFromState.score}
                        profile={winnerFromState.profile}
                    />
                    <Player
                        label='Loser'
                        score={looserFromState.score}
                        profile={looserFromState.profile}
                    />
                </Fragment>
            }
        </div>
    )
}

export default Results;