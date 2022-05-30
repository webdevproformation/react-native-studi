import React, { Component } from 'react';
import { Text } from "react-native"

class CycleVie1C extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nb : 0
        };
    }
    componentDidMount = () => {
        // exécuté lorsque le composant est affiché à l'écran
        // méthode ne va être exécuté QUE 1 seule 
        console.log("le composant vient d'être affiché")
        this.setState({nb : ++this.state.nb})
    }
    componentWillUnmount = () => {
        console.log("le composant vient d'être supprimé de la vue")
    }
    componentDidUpdate = () => {
        console.log("le state du composant vient d'être modifié")
    }

    modifNb = () => {
        this.setState({nb : this.state.nb += 1})
    }

    render() {
        return (
            <Text onPress={this.modifNb}>présentation cycle de vie Composant {this.state.nb}</Text>  
        );
    }
}

export default CycleVie1C;