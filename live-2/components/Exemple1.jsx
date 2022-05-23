import {Text , View} from "react-native";
// View => <div>

function Exemple1(){
    const styleBlue = {color : "blue"};

    return (
    <View>
        <Text style={styleBlue}>le premier</Text>
        <Text style={styleBlue}>le deuxieme</Text>
    </View>) ; 
            
            
}

export default Exemple1 ;