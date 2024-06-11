import {Button, View, Text, StyleSheet, ImageBackground } from "react-native";
import Signup_Page from "../components/Signup/Signup_Page";
import LoginPage from "../components/Login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import button_style from "../components/Button/Button_styles";

const img = {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_XIVvsDSiRtsqtoPF5xNVqtSMP-fLCNAZCqUpLKp5TPZTpz36mDX4Pq1B-MXLu05w9U&usqp=CAU'}

const text_style = StyleSheet.create({
    text : {
        fontSize : 40,
        fontWeight : 'bold',
        color : 'white'
    }
});

function HomeScreen( {navigation} ){
    return(
        <ImageBackground source={img} resizeMode="cover" style = {{flex:1}}>
        <View style = {{ alignItems : 'center'}}>
            
            <Text style = {text_style.text}>Home Screen</Text>
            <View style = {button_style.container}>
                <Button 
                    style = {button_style.text}
                    color = 'red'
                    title = "Login Page"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
            
        </View>
        </ImageBackground>
    )
}

export default HomeScreen;