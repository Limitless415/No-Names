import React ,{useContext, useState}from "react";
import { View,Text,StyleSheet,TextInput,Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";


const CreateScreen =(props)=>{



    const{addBlogPost} = useContext(Context);

    return<BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => { props.navigation.navigate("Index")})
    }}/>

}

const styles =StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding:5,
        margin:5,
    },
    lable:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft:5
    }
});

export default CreateScreen;