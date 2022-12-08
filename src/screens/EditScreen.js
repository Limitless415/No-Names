import React,{useContext,useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import {Context} from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostForm";

const EditScreen =(props) =>{

    const blogID = props.navigation.getParam("id");

    const {state, editBlogPost} =useContext(Context);

    const blogPost = state.find((currentPost) =>{
        return currentPost.id ===blogID
        }
    )
   
   return<BlogPostForm 
   onSubmit ={(title, content) => {editBlogPost(blogID, title, content, () => {props.navigation.pop()})}} 
        initialValues ={{title: blogPost.title, content: blogPost.content}}
    /> 
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


export default EditScreen;