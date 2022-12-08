import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import {Context as ChestContext} from "../context/ChestContext";

const Chest = (props) => {
  
    const{state, loadChest} = useContext(ChestContext);
    return (<View >
            <FlatList
                data={state}
                keyExtractor={(chest) => {return chest.title}}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { props.navigation.navigate('InnerChest', {id:item.id} ) } }>
                        <Text style={styles.container}>{item.title}</Text>
                    </TouchableOpacity>
                )}  
            />            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderWidth: 1,
    }
});

export default Chest;