import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 
'react-native';
import Premier from  "./composants/Premier"
import { useState } from "react";
import Deuxieme from './composants/Deuxieme';
import { Troisieme } from './composants/Troisieme';
import { Quatrieme } from './composants/Quatrieme';

export default function App() {

  const [nb , setNb] = useState(12);
  const [titre , setTitre] = useState("premier");

  const listeJour = ["lundi" , "mardi" , "Mercredi"];
  const user = {nom : "Alain" , age : 22 , isAdmin : true}; 

  return (
    <View style={styles.container}>
      <Quatrieme nom={titre} liste={listeJour} age={nb}/>
      <Troisieme name="Bernardo"/>
      <Premier titre={titre} like={nb} user={user} jours={listeJour} modif={setNb} />
      <Deuxieme titre={titre} like={nb} user={user} jours={listeJour} modif={setNb} modifInput={setTitre} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
