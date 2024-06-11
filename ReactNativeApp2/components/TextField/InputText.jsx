import { SafeAreaView, TextInput } from "react-native";
import input_style from "./input_styles";

function InputText({secure}){
    return(
        <SafeAreaView style = {input_style.container}>
            <TextInput secureTextEntry={secure}  style ={input_style.text} />
        </SafeAreaView>
    );
}

export default InputText;