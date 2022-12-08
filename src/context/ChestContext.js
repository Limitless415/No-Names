import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const chestReducer = (state, action) => {
    switch(action.type) {
        case 'load_chest':
            return [...state, {title: `Item #${state.length+1}`}]
        default:
            return state;
    }

}

    const loadChest = (dispatch) => {
        return() =>{
        dispatch({type: 'load_chest'});
    }
}

export const {Context, Provider} = createDataContext(chestReducer, {loadChest:loadChest}, 
    [
        {id: 300, title: "Bench Press", description: "Draw your shoulder blades back behind you to keep from pressing with rounded shoulders. Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.) Inhale while lowering the bar to your chest, at the nipple line. Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.", 
        imageSource: require('../../assets/Barbell-Bench-Press.gif')},
        {id: 301, title: "Dumbbell Pullover", description: "Extend your arms toward the ceiling, over your chest. Your palms should be facing each other, and your elbows slightly bent. Inhale and extend the weights back and over your head, keeping a strong back and core. Take about 3 to 4 seconds to reach a fully extended position where the weights are behind—but not below—your head. Exhale slowly and return your arms to the starting position.", 
        imageSource: require('../../assets/Dumbbell-Pullover.gif')},
        {id: 302, title: "Dumbbell Fly", description: "Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench. To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top. Slightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow. Once the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position. Without allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.", 
        imageSource: require('../../assets/Dumbbell-Fly.gif')},
    ]);