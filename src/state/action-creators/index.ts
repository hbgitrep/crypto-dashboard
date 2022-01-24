import { Action } from './../actions/index';
import { Dispatch } from 'react';
import { ActionType } from './../action-type/index';
import axios from 'axios';
import { coin } from '../reducers/CryptoReducer';


export const getCoinsList = () =>{
    return async (dispatch: Dispatch<Action>) => {
        const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
        dispatch({
            type: ActionType.SET_COINS_LIST,
            payload: res.data.coins
        })
        return Promise.resolve(res.data.coins);
    }
}


export const setCoinsList = (payload: coin[]) =>{
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_COINS_LIST,
            payload
        })
    }
}

export const setSearchText = (searchStr: string)=> {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SEARCH_TEXT,
            payload: searchStr
        })
    }
}

export const toggleCollapse = (value: boolean)=> {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.TOGGLE_LIST,
            payload: value
        })
    }
}


export const setSelectedCoin = (value: coin)=> {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SELECTED_COIN,
            payload: value
        })
    }
}