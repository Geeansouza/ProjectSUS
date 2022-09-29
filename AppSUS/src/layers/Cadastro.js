import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from "react-native";
import Input from "../components/Inputs";
import Button from "../components/Button";
import COLORS from "../const/Colors";
import Bar from "../assets/retangulo.png";
import Cruz from "../assets/cruz.png";

const Cadastro = () => {

const [inputs, setInputs] = React.useState({
    nome: '',
    telefone: '',
    celular: '',
    email: '',
    nomeresposavel: '',
    telefoneresponsavel: '',
  });

  {/***********************************************************/}

  // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA STATE NO MÉTODO onChangeText
  const handlerOnChange = (text, input) => {
    setInputs( (prevState) => (
      //console.log(prevState),
      //console.log(input + ' ' + text)

      //INJEÇÃO DE DADOS NA STATE 
      {...prevState, [input]:text}
      
      ));
  }

  {/***********************************************************/}

  {/********** VALIDAÇÃO DOS DADOS DE CADASTRO ***********/}
  
  // STATE DE ERRO DE PREENCHIMENTO
  const [errors, setErrors] = React.useState({});

  // FUNÇÃO HANDLER QUE CONFIGURA AS MENSAGENS DE ERRO NA STATE
  const handlerErrors = (errorMessage, input) => {
    setErrors( (prevState)=>({...prevState, [input]:errorMessage}) );
  }
// FUNÇÃO DE VALIDAÇÃO               
const validate = () => {
    
    let validate = true;

    if (!inputs.nome) {
      validate = false;
      handlerErrors('Informe o seu Nome.', 'nome');
      // console.log('Nome EM BRANCO');
    }
    if (!inputs.telefone) {
      validate = false;
      handlerErrors('Informe o seu Telefone.', 'telefone');
      // console.log('TITULO EM BRANCO');
    }
    if (!inputs.celular) {
      validate = false;
      handlerErrors('Informe o seu Celular.', 'celular');
      // console.log('TITULO EM BRANCO');
    }
    if (!inputs.email) {
      validate = false;
      handlerErrors('Informe o seu Email.', 'email');
      // console.log('TITULO EM BRANCO');
    }
    if(validate){
        //ENVIAR DADOS PARA A API CADASTRAR
        // cadastrar()
        console.log('cadastrou ai sim')
  
      }
  
      console.log(errors);
  
    }


    return(
        <SafeAreaView style={estilos.safe}>
            <View style={estilos.bar}>
                <Image source={Bar} style={estilos.retangulo}/>
                <Image source={Cruz} style={estilos.cruz}/>
                <Text style={estilos.textTitle}>CADASTRO DE  PACIENTE</Text>
            </View>
            <ScrollView style={estilos.scroll}>
                <View style={estilos.viewForm}>

                    <Input  label="Nome" error={errors.nome}     onFocus={()=>(handlerErrors(null, 'nome'))}    onChangeText={ (text) => handlerOnChange(text, 'nome' )     }/>
                    <Input  label="Telefone" error={errors.telefone}     onFocus={()=>(handlerErrors(null, 'telefone'))}    onChangeText={ (text) => handlerOnChange(text, 'telefone' )     }/>
                    <Input  label="Celular" error={errors.celular}     onFocus={()=>(handlerErrors(null, 'celular'))}    onChangeText={ (text) => handlerOnChange(text, 'celular' )     }/>
                    <Input  label="Email" error={errors.email}     onFocus={()=>(handlerErrors(null, 'email'))}    onChangeText={ (text) => handlerOnChange(text, 'email' )     }/>
                    <Input  label="Nome Responsavel"/>
                    <Input  label="Telefone Responsavel"/>
                    <Button title="CADASTRAR"  onPress={validate} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const estilos = StyleSheet.create({

    safe:{
      flex:1,
      backgroundColor:COLORS.white,
    },
    scroll:{
        paddingHorizontal:20,
        paddingTop:50,
      },
      viewForm:{
        marginVertical:20,
        marginBottom:50
      },
      textTitle:{
        paddingLeft:20,
        color:COLORS.white,
        position:"absolute",
        fontSize:20,
        fontWeight:"bold",
      },
      retangulo:{
        // position:"absolute",
        height:Dimensions.get("window").height *0.20,
        width:"100%",
        // zIndex:2,
    },
      cruz:{
        position:"absolute",
        height:60,
        width:60,
        // alignSelf:"flex-end",
        marginHorizontal:340,
        
    },
      bar:{
        position:"relative",
        display:"flex",
        justifyContent:"center",
        // alignContent:"space-between"

        
    },

  
  });
  
  export default Cadastro;