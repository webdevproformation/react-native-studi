import  {  Component } from "react";
import { Text , View , Button } from "react-native";

class Premier extends Component{

    render = () =>{
        console.log(this.props); 
        // destructuration extraire depuis un objet ses propriétés
        // ES6 
        const {titre , like , user , modif } = this.props ;
        return <View>
            <Text>{titre}</Text>
            <Button title="modifier nb" onPress={ () => modif(like + 1) }  />
            <Text>{like}</Text>
            <Text>{user.nom} a {user.age}</Text>
            {this.props.jours.map( function(item , index) {
                return <Text key={index}>{item}</Text>
            } )}
        </View>
    }
}


export default Premier ;