import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const armReducer = (state, action) => {
    switch(action.type) {
        case 'load_arm':
            return [...state, {title: `Item #${state.length+1}`}]
        default:
            return state;
    }

}

    const loadArm = (dispatch) => {
        return() =>{
        dispatch({type: 'load_arm'});
    }
}

export const {Context, Provider} = createDataContext(armReducer, {loadArm:loadArm}, 
    [
        {id: 110, title: "Dumbbell Curl", description: "Dumbbell curl is a basic strength training exercise to build muscle and strength in the arms. Specifically, the dumbbell curl works all the muscles in the front of the arm. It is a highly effective exercise for maximize the bicep peak.", 
        imageSource: require('../../assets/Dumbbell-Curl.gif')},
        {id: 111, title: "Pushdown", description: "Rope Push-down: When you grip the triceps rope, your hands should be in a neutral position, meaning your palms will face each other.", 
        imageSource: require('../../assets/Pushdown.gif')},
        {id: 112, title: "Crunches", description: "The development of the brachioradialis muscle helps to strengthen your grip and can make your arm muscles appear stronger and more voluminous.", 
        imageSource: require('../../assets/Seated-Hammer-Curl.gif')},
        {id: 113, title: "Hammer Curl", description: "Stand with your legs straight (but not stiff or locked) and knees aligned under the hips. Your arms are at your side with a dumbbell in each hand, the weights resting next to the outer thigh. Your palms are facing the thighs, the thumbs are facing forward, and your shoulders are relaxed.", 
        imageSource: require('../../assets/Hammer-Curl.gif')},
        {id: 114, title: "One-Arm Lying Triceps Extension", description: "Starting Position: Lie on a bench with one dumbbell in your hand. Use your opposite hand as a cue for the correct position for your shoulder and elbow. Hold the dumbbell in your hand so that it is pointing towards the ceiling. ", 
        imageSource: require('../../assets/One-Arm-Lying-Triceps-Extension.gif')},
        {id: 115, title: "Single Dumbbell Spider Hammer Curl", description: "Start by grabbing a dumbbell in one hand, holding it with a reverse grip so that your palm is facing inward and position yourself lying face first on an inclined bench. Then extend your bicep down and out in front of you so that you are able to fully contract your bicep and curl the weight up towards your shoulder, squeezing your muscle in the process and isolating the bicep. Hold for a count when you reach the top position then return back to the starting position.", 
        imageSource: require('../../assets/Single-Dumbbell-Spider-Hammer-Curl.gif')},
        {id: 116, title: "Seated One-Arm Dumbbell Tricep Extension", description: "Begin by adjusting a bench to about 90 degrees. Then, while holding one dumbbell in your arm extend your arm straight up towards the ceiling. Inhale as you slowly lower the weight so that the dumbbell goes next to your ear. Pause for a brief second at the bottom, and then, exhale and extend your arm back towards the ceiling. ", 
        imageSource: require('../../assets/Seated-One-Arm-Dumbbell-Triceps-Extension.gif')},

    ]);