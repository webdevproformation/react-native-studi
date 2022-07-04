import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux"; // composant contenir le store 
import { createStore ,  applyMiddleware  } from "redux"; // créer un store (super state) + ajouter des opérations asynchrone dans redux 
import thunk from "redux-thunk"; // permet de gérer l'asynchrone axios 
import reducer from "./reducers"

const store = createStore( // créer le store 
  reducer , // les fonctions réductrices 
  applyMiddleware(thunk) // le ou les middleware que l'on va utiliser dans ce store 
);

import { getArticles } from './action/post.action';
import { Articles } from './composants/Articles';

store.dispatch(getArticles()); 

export default function App() {

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Text>React native & Redux</Text>
        <Articles />
      </Provider>
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
