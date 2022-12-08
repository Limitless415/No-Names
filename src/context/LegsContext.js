import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const legsReducer = (state, action) => {
    switch(action.type) {
        case 'load_legs':
            return [...state, {title: `Item #${state.length+1}`}]
        default:
            return state;
    }

}

    const loadLegs = (dispatch) => {
        return() =>{
        dispatch({type: 'load_legs'});
    }
}

export const {Context, Provider} = createDataContext(legsReducer, {loadLegs:loadLegs}, 
    [
        {id: 200, title: "Barbell Squat", description: "Explanation is too long, would suggest video", 
        imageSource: require('../../assets/BARBELL-SQUAT.gif')},
        {id: 201, title: "Calf Raise", description: "Stand up straight, then push through the balls of your feet and raise your heel until you are standing on your toes. Then lower slowly back to the start.", 
        imageSource: require('../../assets/Dumbbell-Calf-Raise.gif')},
        {id: 202, title: "Leg Press", description: "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you.", 
        imageSource: require('../../assets/Leg-Press.gif')},
    ]);