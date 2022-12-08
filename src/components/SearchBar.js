import React from 'react'
import {TextInput, View, StyleSheet, } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const SearchBar = (props) => {

    return <View style={styles.background}>
        <Entypo name="magnifying-glass" style={styles.iconStyle}/>
        <TextInput 
            placeholder="Type Your Student ID here" 
            style={styles.inputStyle}
            value={props.searchTerm}
            onChangeText={(newTerm) => props.onTermChange(newTerm)}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={ () => { props.onSearchTermSubmit() } }
            
            />


    </View>

}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#cccccc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle : {
        flex: 1,
        fontSize: 18
    },
    iconStyle : {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10
    }

});

export default SearchBar;





