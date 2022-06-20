import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Deuxieme } from './composants/Deuxieme';
import  Premier  from './composants/Premier';
import { UserContextProvider } from './context/userContext';


export default function App() {
  return (
    <View style={styles.container}>
      <UserContextProvider>
        <Premier />
        <Deuxieme />
        <StatusBar style="auto" />
      </UserContextProvider>
      
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
