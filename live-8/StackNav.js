import { useState } from 'react';

import { StyleSheet, Text, View , Button , TextInput } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"


const Home = ({navigation}) => {
  const [nom , setNom] = useState("");
  return (
    <View style={styles.container}>
      <Text>je suis la page d'accueil</Text>
      <TextInput 
        placeholder='saisir votre nom'
        onChangeText={(text) => setNom(text)}
        value={nom}
        style={styles.box}
      />
      <Button 
        title="aller à contact"
        onPress={() => {
          navigation.navigate("Contact", { nom : nom });
        }}
      />
    </View>
  )
}

const Contact = ({navigation , route}) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenu {route.params.nom}</Text>
      <Button 
        title="retour Accueil"
        color="#EF5B0C"
        onPress={() => {
          //navigation.goBack();
          navigation.navigate( "Home" );
        }}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title : "Bienvenu sur l'application" }}/>
        <Stack.Screen name="Contact" component={Contact}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {
    borderWidth: 3,
    borderColor: "black",
    paddingVertical : 5,
    paddingHorizontal : 10,
    margin:15
  }
});
