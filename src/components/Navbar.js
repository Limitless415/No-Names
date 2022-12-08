import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from "react-navigation";



const Navbar = (props) => {
    return <View style={styles.view}>
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.containers} onPress={() => {props.navigation.navigate("Index")}}>
                <Text style={styles.texts}>Logger</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => {props.navigation.navigate("Calendar")}}>
                <Text style={styles.texts}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containers} onPress={() => {props.navigation.navigate("Exercise")}}>
                <Text style={styles.texts}>Exercise</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containers} onPress={() => {props.navigation.navigate("Barcode")}}>
                <Text style={styles.texts}>Barcode</Text>
            </TouchableOpacity>
        </View>
    </View>

}

// style nav bar to the bottom of the screen
const styles = StyleSheet.create({
    view: {
        // flexDirection: "row",
        // justifyContent: "center",
        
        position: 'absolute',
        alignItems: 'center',
        bottom: 100,
        left: 0,
        right: 0,
        zIndex: 10,

    },
    navbar: {
        flexDirection: "row",
        backgroundColor: "#eee",
        width: '90%',
        justifyContent: 'space-around',
        borderRadius: 70,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        alignItems: 'center',

    },
    containers: {
        // width: "30%", 
        // height: 45, 
        // borderColor: "black", 
        // borderRadius: 5, 
        // backgroundColor: "#5A5A5A", 
        justifyContent: "center",
        marginRight: 10,
        padding: 14

      },
      texts: {
        fontSize: 20,
        alignSelf: 'center',
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        // padding: 10

    }
})

export default withNavigation(Navbar);