import React from "react";
import { TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";
import COLORS from "../const/Colors";

const Button = ( { title, onPress= ()=>{} } ) => {

    return (

        <TouchableOpacity style={estilos.button} activeOpacity={0.5} onPress={onPress}>
            
            <Text style={estilos.title}>{title}</Text>

        </TouchableOpacity>

    );

}

const estilos = StyleSheet.create({
    button:{
        height:55,
        width:"100%",
        borderRadius:9,
        backgroundColor:"#634DA1",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
        elevation: 7,
    },
    title:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:18,
    },
});

export default Button;