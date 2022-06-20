import { useState , useEffect , useContext } from "react";
import {  View , Button , Text  } from "react-native"
import { UserContext } from "../context/userContext";


const Premier = () => {
    const [ nb , setNb ] = useState( 1 );
    const [ compteur , setCompteur ] = useState({nb : 1 , nom : "Alain"});
    const [user , setUser] = useState({});
    const profil = useContext(UserContext); 

    
    useEffect( () => {
        // console.log("fonction exécutée uniquement au chargement du composant"); 
        fetch(`https://jsonplaceholder.typicode.com/users/${nb}`)
        .then(response => response.json())
        .then(data => setUser(data))

    }  , [nb] )
    // dés que la valeur de nb va être modifié => effet supplémentaire
    // effet secondaire => exécuter le callback qui est dans le premier paramètre de useEffect 

    return <View>
       
        <Text>{ JSON.stringify(profil) }</Text>
        <Button 
            title="changer user"
            onPress={() => setNb((prevNb) => {return prevNb + 1})}
        />
         <Text>{ nb }</Text>
        <Button 
            title="augmenter"
            onPress={() => setCompteur((prevCompteur) => {  
                const cloneCompteur = {...prevCompteur};
                cloneCompteur.nb++;
                // cloneCompteur va avoir une adresse mémoire différente
                // de la variable compteur
                // comparaison entre les objets (adresse mémoire)
                return cloneCompteur
             })}
        />
        <Text>{ compteur.nb }</Text>
        <Text>{ compteur.nom }</Text>
    </View>

}

export default Premier ;
