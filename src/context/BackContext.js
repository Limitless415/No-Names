import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const backReducer = (state, action) => {
    switch(action.type) {
        case 'load_back':
            return [...state, {title: `Item #${state.length+1}`}]
        default:
            return state;
    }

}

    const loadBack = (dispatch) => {
        return() =>{
        dispatch({type: 'load_back'});
    }
}

export const {Context, Provider} = createDataContext(backReducer, {loadBack:loadBack}, 
    [
        {id: 400, title: "Lat Pulldown", description: "Grasp the bar with a wide grip with an overhand, knuckles-up grip. Other positions and grips are possible but start with this standard position. Pull the bar down until it's approximately level with the chin. Aim to keep your upper torso stationary. Squeeze the shoulder blades together while maintaining square shoulders. From the bottom position, with the bar close to your chin, slowly return the bar to the starting position while controlling its gradual ascent. Don't let it crash into the weight plates. ", 
        imageSource: require('../../assets/Lat-Pulldown.gif')},
        {id: 401, title: "Pull Up", description: "Exhale while pulling yourself up so your chin is level with the bar. Pause at the top. Lower yourself (inhaling as you go down) until your elbows are straight. Repeat the movement without touching the floor.", 
        imageSource: require('../../assets/Pull-up.gif')},
        {id: 402, title: "Reverse Grip Barbell Row", description: "", imageSource: require('../../assets/Reverse-Grip-Barbell-Row.gif')},
    ]);