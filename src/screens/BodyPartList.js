import React from "react";
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Navbar from "../components/Navbar";

const BodyPartList = (props) => {

    return <View style={styles.backGround}>
        <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate("Arm")}}>
            <Text style={styles.text}>Arms</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Chest")}}>
            <Text style={styles.text}>Chest</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Back")}}>
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Legs")}}>
            <Text style={styles.text}>Legs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Core")}}>
            <Text style={styles.text}>Core</Text>
        </TouchableOpacity>
        

        <Navbar />
    </View>;
}

const styles = StyleSheet.create({ 
   
    text: {
        fontSize: 25,
        textAlign: 'center',
        textShadowColor: '#fff',
        color: 'white',
        textShadowRadius: 20,
        padding: 3
    },
    container: {
        backgroundColor: '#0000FF',
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backGround:{
        backgroundColor: '#ffffff',
        flex: 1,
        overflow: 'scroll'
    },
    container1:{
        alignItems: "center"
    },
});

export default BodyPartList;