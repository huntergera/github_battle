import {BATTLE_ENTITY} from "../constants/battle.constants";

export const setPlayerOneName = (payload) => ({
    type: BATTLE_ENTITY.SET_PLAYER_ONE_NAME,
    payload,
})

export const setPlayerTwoName = (payload) => ({
    type: BATTLE_ENTITY.SET_PLAYER_TWO_NAME,
    payload,
})

export const setPlayerOneImage = (payload) => ({
    type: BATTLE_ENTITY.SET_PLAYER_ONE_IMAGE,
    payload,
})

export const setPlayerTwoImage = (payload) => ({
    type: BATTLE_ENTITY.SET_PLAYER_TWO_IMAGE,
    payload,
})