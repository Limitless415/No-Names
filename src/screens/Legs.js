import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import {Context as LegsContext} from "../context/LegsContext";

const Legs = (props) => {
  
    const{state, loadLegs} = useContext(LegsContext);
    return (<View >
            <FlatList
                data={state}
                keyExtractor={(legs) => {return legs.title}}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { props.navigation.navigate('InnerLegs', {id:item.id} ) } }>
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

export default Legs;