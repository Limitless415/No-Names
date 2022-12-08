import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const coreReducer = (state, action) => {
    switch(action.type) {
        case 'load_core':
            return [...state, {title: `Item #${state.length+1}`}]
        default:
            return state;
    }

}

    const loadCore = (dispatch) => {
        return() =>{
        dispatch({type: 'load_core'});
    }
}

export const {Context, Provider} = createDataContext(coreReducer, {loadCore:loadCore}, 
    [
        {id: 100, title: "Cross Crunch", description: "cross crunch desc", imageSource: require('../../assets/Cross-Crunch.gif')},
        {id: 101, title: "Cross Body Mountain Climber", description: "cross body mountain climber desc", imageSource: require('../../assets/Cross-Body-Mountain-Climber.gif')},
        {id: 102, title: "Crunches", description: "Increases the strength of the abdominal muscles: The primary role of your abdominal muscles is to stabilize your mid-section. It supports you while lifting heavy objects, allowing you to twist and rotate your body. These are all day long actions that you do not notice, so it is important that your abdominal muscles can sustain long hours of work. Crunch exercise helps build this important endurance in the abdominal muscles.",
         imageSource: require('../../assets/Crunch.gif')},

    ]);