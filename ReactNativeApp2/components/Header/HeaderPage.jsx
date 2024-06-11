import { View, Text } from "react-native";
import header_style from "./Header_styles";

function HeaderPage(){
    return (
        <View style = {header_style.container}>
            <Text style = {header_style.text}>Header</Text>
        </View>
    );
}

export default HeaderPage;