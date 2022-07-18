import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { useEffect , useState } from "react";

import * as SQLITE from "expo-sqlite"; // chargement du sdk 

const db = SQLITE.openDatabase("data.db");
// créer un fichier data.db si il n'existe pas
// etablir une connexion à ce fichier 


const useForceUpdate = () => {
  const [state, setState] = useState(0);
  return [state, () => setState(prev => prev+1)];
};


export default function App() {

  const [articles , setArticles ] = useState(null);
  const [forcedUpdateId, forceUpdate] = useForceUpdate();

  // au moment du chargement de mon application 
  useEffect( function(){
    // console.log("exécuté uniquement lors du lancement de l'app")
    db.transaction( function(tx){ // grouper des requêtes SQL
      // requêtes SQL 
      tx.executeSql( 
          "CREATE TABLE IF NOT EXISTS articles ( id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, titre TEXT NOT NULL , dt_create DATETIME NOT NULL);" , 
          [] , 
          function(transaction , resultat){
            console.log("tout est ok" , resultat)
          } , 
          function(transaction , erreur){
            console.log("erreur !!!" , erreur)
          } 
        )
    } );
  } , [] );

  useEffect(function(){
    db.transaction( function(tx){
      tx.executeSql(
        "SELECT * FROM articles",
        [],
        function(transaction , resultat){
          console.log("contenu de la table articles : " , resultat.rows._array)
          setArticles(resultat.rows._array)
        } , 
        function(transaction , erreur){
          console.log("erreur !!!" , erreur)
        } 
      )
    })

  }, [forcedUpdateId])


  const onPress = () => {
    db.transaction(function(tx){
      tx.executeSql(
        "INSERT INTO articles (titre , dt_create) VALUES  ( ? , ? ) ",
        [
          "article 1",
          "2022-07-01"
        ],
        function(transaction , resultat){
          console.log("insertion des données dans la table " )
          forceUpdate();
        } , 
        function(transaction , erreur){
          console.log("erreur !!!" , erreur)
        } 
      );
    }); 
  }

  const onDelete = () => {
    db.transaction(function(tx){
      tx.executeSql(
        "DELETE FROM articles WHERE id = ? ",
        [
         2
        ],
        function(transaction , resultat){
          console.log("supprimer de l'article 2 " )
          forceUpdate();
        } , 
        function(transaction , erreur){
          console.log("erreur !!!" , erreur)
        } 
      );
    }); 
  }

  return (
    <View style={styles.container}>
      <Text>utiliser SQLITE</Text>
      <Button 
        title="Ajouter un article"
        onPress={() => onPress()}
      />

      <Button 
        title="supprimer article 2"
        onPress={() => onDelete()}
      />
      <Text>{JSON.stringify(articles)}</Text>
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
