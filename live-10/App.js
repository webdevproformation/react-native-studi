import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import { useEffect , useState } from "react"

export default function App() {
  const [phrase, setPhrase] = useState("");

  const getData = () => {
    fetch("https://api.kanye.rest/")
     .then(reponse => reponse.json())
     .then(({quote}) => setPhrase(quote))
  }

  useEffect(function(){
    getData()
  } , [] );

  return (
    <View style={styles.container}>
      <Button 
        title="nouvelle citation"
        onPress={ getData }
        color="#61481C"
      />
      <Text style={styles.citation}>{phrase}</Text>
      <StatusBar style="auto" hidden={true} />
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
  citation : {
    margin: 20
  }
});
