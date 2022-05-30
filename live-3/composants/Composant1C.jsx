import React, { Component } from 'react';
import { Text , View } from "react-native";

class Composant1C extends Component {
    state = {
        texte : "je suis du texte modification",
        chiffre : 12 ,
        tableau : ["rose" , "tulipe", "jasmin"],
        user : {
            nom : "Alain",
            role : "admin",
            isLogged : true
        }
    }

    constructor(props) {
        super(props);
    }
    render() {
        // destructuration => javascript ES6 
        const {texte , chiffre , tableau , user} = this.state ;
        const {valeur , largeur} = this.props;
        return (
            <View>
                <Text>{valeur}</Text>
                <Text>{ texte } - {largeur}</Text>
                <Text>{ chiffre }</Text>
                <Text>{ tableau[0] }</Text>
                {tableau.map( function(fleur , index){
                    return <Text key={index}>{fleur}</Text>
                } )}
                <Text>{ user.nom } est {user.role}</Text>
            </View>
        );
    }
}

export default Composant1C;

