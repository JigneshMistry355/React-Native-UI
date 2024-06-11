import { View, Text } from "react-native";
import header_style from "../Header/Header_styles";

function FooterPage(){
    return (
        <View style = {header_style.container}>
            <Text style = {header_style.text}>Footer</Text>
        </View>
    );
}

export default FooterPage;