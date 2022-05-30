import { Text , View } from "react-native"
import { useState } from "react";

const Composant2C = ({valeur , largeur}) => {
   
    const [texte , setTexte] = useState("je suis le texte");
    const [chiffre , setChiffre] = useState(12);
    const [fleurs , setFleurs] = useState(["rose" , "tulipe", "jasmin"]);
    const [user, setUser] = useState({
        nom : "Alain",
        role : "admin",
        isLogged : true,
        age : 22
    });

    return  <View>
        <Text>{ texte } - {valeur}</Text>
        <Text>{ chiffre } -  {largeur}</Text>
        {fleurs.map((fleur, index) => {
            return <Text key={index}>
                {fleur}
            </Text>
        })}
        <Text>{ JSON.stringify(user) }</Text>
        <Text>{user.nom }</Text>
    </View>
}

export default Composant2C ;
