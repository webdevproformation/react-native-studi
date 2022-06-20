import { useContext } from "react";
import {  View , Button , Text  } from "react-native"
import { UserContext } from "../context/userContext";

export const Deuxieme = () => {
    const profil = useContext(UserContext); 

    return <View>
        <Button 
            title="modifier connexion profil"
            onPress={() => profil.setProfil(prevProfil => {
                const cloneProfil = {...prevProfil};
                cloneProfil.isConnected = !cloneProfil.isConnected;
                return cloneProfil ; 
            })}
        />
    </View>
}