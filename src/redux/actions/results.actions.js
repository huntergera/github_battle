import {RESULTS_ENTITY} from "../constants/results.constants";

export const setWinner = (payload) => ({
    type: RESULTS_ENTITY.SET_WINNER,
    payload,
})

export const setLoser = (payload) => ({
    type: RESULTS_ENTITY.SET_LOSER,
    payload,
})

export const setError = (payload) => ({
    type: RESULTS_ENTITY.SET_ERROR,
    payload,
})

export const setLoading = (payload) => ({
    type: RESULTS_ENTITY.SET_LOADING,
    payload,
})