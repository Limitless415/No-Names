import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import {Context as BackContext} from "../context/BackContext";

const Back = (props) => {
  
    const{state, loadBack} = useContext(BackContext);
    return (<View >
            <FlatList
                data={state}
                keyExtractor={(back) => {return back.title}}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { props.navigation.navigate('InnerBack', {id:item.id} ) } }>
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

export default Back;