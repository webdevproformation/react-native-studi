import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Composant1C from './composants/Composant1C';
import Composant2F from './composants/Composant2F';
import CycleVie1C from "./composants/CycleVie1C";
import CycleVie2F from "./composants/CycleVie2F";
import {useState} from "react";

export default function App() {
  const [data, setData] = useState("comment allez vous ??");
  const [width, setWidth] = useState(999);
  const [show , setShow] = useState(false);
  const [show2 , setShow2] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Live 3 Studi modification</Text>
      <Composant1C valeur={data} largeur={width}/>
      <Composant2F valeur={data} largeur={width}/>
      <Button onPress={() => setShow(!show) } title="btn1" />
      { show && <CycleVie1C /> }
      <Button onPress={() => setShow2(!show2) } title="btn2" color="#FFCC8F"/>
      { show2 && <CycleVie2F /> }
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
