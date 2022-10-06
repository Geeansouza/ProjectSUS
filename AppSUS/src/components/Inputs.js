import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../const/Colors";


const Input = ({label,IconName, error, onFocus=()=>{}, ...props}) => {

    const [showText, setShowText] = useState(true)
    
  

    return (
        <View style={estilos.formContainer}>

            <Text style={estilos.inputLabel}>{label}</Text>

            <View style={[estilos.inputContainer, {borderBottomColor: error ? COLORS.errorRed : COLORS.lightPurlple }]}>

                {/* Caixa de texto */}
                <TextInput 
                style={estilos.textInput}
                autoCorrect={false}
                onFocus={()=>{onFocus()}}
                {...props}
                />

            </View>

            <Text style={[estilos.errorMessage]}>{error}</Text>
            {/* <Text style={estilos.errorMessage}>{error}</Text> */}

        </View>
    );
}

const estilos = StyleSheet.create({
    formContainer:{
        marginBottom:20,
    },
    inputLabel:{
        marginVertical:5,
        fontSize:15,
        color:COLORS.PurpleDark,
        fontWeight:"bold"
    },
    errorMessage:{
        color:COLORS.errorRed,
        fontWeight:"bold",
        
    },
    inputContainer:{
        height:55,
        // elevation: 3,
        backgroundColor:COLORS.BackgroundInputWhite,
        flexDirection:"row",
        paddingHorizontal:15,
        borderBottomWidth:1.5,
        alignItems:"center",
        borderBottomColor:COLORS.PurpleDark,
    },
    textInput:{
        // fontWeight:"bold",
        color:COLORS.black,
        flex:1
    },

});

export default Input;