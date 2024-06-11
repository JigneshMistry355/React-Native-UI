import { Button, View, Text, StyleSheet, ImageBackground } from "react-native";
import HeaderPage from "../Header/HeaderPage";
import FooterPage from "../Footer/FooterPage";
import login_style from "./Login_styles";
// import Button from "../Button/Button";
import InputText from "../TextField/InputText";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import button_style from "../Button/Button_styles";

const LoginPage = () => {
    const img = {uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_XIVvsDSiRtsqtoPF5xNVqtSMP-fLCNAZCqUpLKp5TPZTpz36mDX4Pq1B-MXLu05w9U&usqp=CAU'}

    const navigation = useNavigation();
    return (
        <View>
            <HeaderPage />
            

            <View style = {login_style.container}>

            <ImageBackground source={img} resizeMode="cover" style = {login_style.background}>
                <Text style = {login_style.text}>LOGIN</Text>

                <InputText secure={false} />
                <InputText secure={true}/>

                <View style = {button_style.container}>
                    <Button 
                        style = {button_style.text}
                        title = "Submit" 
                        color= 'red'
                    />
                </View>

                <View style = {button_style.container}>
                    <Button  
                        color = 'red'
                        title = "Go to Home"
                        onPress = {() => navigation.navigate("Home")
                        
                        }
                    />
                </View>
                </ImageBackground>
            </View>
            

            <FooterPage />
            
        </View>
    );
}

export default LoginPage;