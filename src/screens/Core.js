import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import {Context as CoreContext} from "../context/CoreContext";

const Core = (props) => {
  
    const{state, loadCore} = useContext(CoreContext);
    return (<View >
            <FlatList
                data={state}
                keyExtractor={(core) => {return core.title}}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { props.navigation.navigate('InnerCore', {id:item.id} ) } }>
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

export default Core;