import {RESULTS_ENTITY} from "../constants/results.constants";

export const initialState = {
    loading: true,
    winner: null,
    loser: null,
    error: null
}

export const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULTS_ENTITY.SET_WINNER:
            state.winner = action.payload;
            return Object.assign({}, state);

        case RESULTS_ENTITY.SET_LOSER:
            state.loser = action.payload;
            return Object.assign({}, state);

        case RESULTS_ENTITY.SET_LOADING:
            state.loading = action.payload;
            return Object.assign({}, state);

        case RESULTS_ENTITY.SET_ERROR:
            state.error = action.payload;
            return Object.assign({}, state);

        default:
            return state;
    }
}