import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
import Navbar from '../components/Navbar';


const About = (props) =>
{
    return <View style={styles.backGround}>
        <Text style={styles.title}>Gymbros</Text>
        <Text style={styles.names}>Steven Bordelon: Graduate</Text>
        <Text style={styles.names}>Max Hu: Senior</Text>
        <Text style={styles.names}>Charlie Le: Senior</Text>
        <Text style={styles.names}>Thanh Nguyen: Senior</Text>
        <Text style={styles.names}>Dustine Yu: Senior</Text>
        
        <Navbar />
    </View>
}

const styles = StyleSheet.create
({
    title:
    {
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 10,
        fontWeight: "bold"
    },
    names: {
        fontSize: 30,
        alignSelf: 'center',
    },
    backGround:{
        backgroundColor: '#ffffff',
        flex: 1,
        overflow: 'scroll'
    },
});

export default About;