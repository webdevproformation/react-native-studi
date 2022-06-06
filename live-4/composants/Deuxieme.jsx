import { Text , View , Button , TextInput , StyleSheet } from "react-native";


const Deuxieme = ({like , modif , titre , modifInput}) => {

    return <View>
        <Button title="modif 2" onPress={() => modif(like+1)} color="#990000"  />
        <Text>{like}</Text>
        <Text>{titre}</Text>
        <TextInput onChangeText={modifInput} style={styles.input} placeholder="saisir un texte"/>
    </View>
}

export default Deuxieme ;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:200
    },
  });