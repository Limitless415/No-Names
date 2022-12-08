import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Image, ScrollView} from "react-native";
import {Context as ArmContext} from "../context/ArmContext";

const Arm = (props) => {
  
    const{state, loadArm} = useContext(ArmContext);
    return (<View>
            <FlatList
                data={state}
                keyExtractor={(arm) => {return arm.title}}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { props.navigation.navigate('InnerArm', {id:item.id} ) } }>
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

export default Arm;