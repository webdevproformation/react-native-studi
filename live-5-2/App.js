import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.el1} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"column",
    borderColor:"pink",
    borderWidth:6,
    borderStyle:"solid",
  },
  el1:{ flex: 1, backgroundColor: "red" },
  el2:{
    borderColor:"blue",
    borderWidth:2,
    borderStyle:"dashed",
    padding:4,
    fontSize:20
  }
});
