import React, {useContext, useState} from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import { Context as ChestContext } from "../context/ChestContext";



const InnerChest = (props) => {

    const ChestStuff = useContext(ChestContext);
    const ChestState = ChestStuff.state;
    
    const itemID = props.navigation.getParam("id");
    const itemDetails = ChestState.find((itemDetails) => {
        return itemID === itemDetails.id;
    })

    return (
        <View >
            <ScrollView>
                <View>
                    <View >
                        <Text style={styles.title}>{itemDetails.title} </Text>

                        <Image style={styles.image} source={itemDetails.imageSource} />
                        <View>

                            <Text style={styles.description}>{"\n"}{itemDetails.description} {"\n"}</Text>
                        
                        </View>
                        
                    
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        padding: 5
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    description: {
        fontSize: 20,
        borderWidth: 1,
    }
});

export default InnerChest;