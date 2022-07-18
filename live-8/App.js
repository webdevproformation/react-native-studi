import * as React from 'react';

import { StyleSheet, Text, View , Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Un composant qui agit en tant qu'« Écran » simple
function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Écran d'accueil</Text>
      <Button title="Aller à l'écran 2" onPress={() => {
      // Le paramètre passé est la valeur de la props name dans la définission du navigateur.
      props.navigation.navigate('Secondary');
      }}/>
    </View>
  );
}

 // Un composant qui agit en tant qu'« Écran » simple
function SecondaryScreen() {
  const navigation = useNavigation(); // hook 
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Écran secondaire</Text>
    <Button title="Revenir en arrière" onPress={() => {
      // Permet de retirer un élément de la pile, pour le coup c'est l'écran lui-même.  
      navigation.goBack();
      }} />
  </View>
  );
}

// On créé un navigateur de pile, ici avec la configuration par défaut
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Secondary" component={SecondaryScreen} />
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
});
