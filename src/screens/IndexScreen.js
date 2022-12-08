import React, { useContext } from "react";
import {View , Text, StyleSheet,FlatList, Button,TouchableOpacity} from "react-native";
import { Context as BlogContext} from "../context/BlogContext"
import Navbar from "../components/Navbar";
import {Feather} from '@expo/vector-icons'

const IndexScreen = (props) =>{

    const {state, deleteBlogPost} = useContext(BlogContext);
    
    return<View style={styles.backGround}>
        
        <FlatList
            data ={state}
            keyExtractor ={(blogPost) =>{return blogPost.title} }
            renderItem ={ ({item}) => {
                return <TouchableOpacity onPress={ () => {props.navigation.navigate("Show" , {id : item.id})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                        <Feather name ="trash-2" style={styles.icon}/>
                                    </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
            }}
        />

        <Navbar />
    </View>;
    
}

IndexScreen.navigationOptions = (props) =>{
    return {
        headerRight: () => (
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Create")}}>
            <Feather name  ="plus" size={30}/>
            </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
    textStyle:{
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#cccccc',
    },
    row :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    title : {
        fontSize:18
    },
    icon:{
        fontSize:24
    },
    backGround:{
        backgroundColor: '#ffffff',
        flex: 1,
        overflow: 'scroll'
    },


});

export default IndexScreen;