import {BATTLE_ENTITY} from "../constants/battle.constants";

export const initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null
}

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE_ENTITY.SET_PLAYER_ONE_NAME:
            state.playerOneName = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_PLAYER_TWO_NAME:
            state.playerTwoName = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_PLAYER_ONE_IMAGE:
            state.playerOneImage = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_PLAYER_TWO_IMAGE:
            state.playerTwoImage = action.payload;
            return Object.assign({}, state);

        default:
            return state;
    }
}