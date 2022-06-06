import { Text , View , Button , TextInput , StyleSheet } from "react-native";

export const Troisieme = ({name , distance}) => {
    return <View>
        <Text>{ name  } - {distance}</Text>
    </View>
}

Troisieme.defaultProps = {
    name: "Charles",
    distance : 50 
}