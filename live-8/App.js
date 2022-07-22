import { View , Text , StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>je suis la home</Text>
        </View>
    )
}
const Contact = () => {
    return (
        <View style={styles.container}>
            <Text>je suis contact</Text>
        </View>
    )
}

const Profil = () => {
    return (
        <View style={styles.container}>
            <Text>je suis profil</Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

export default App = () => {
   return (
    <NavigationContainer>
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    </NavigationContainer>
   )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : "center",
        justifyContent : "center"
    }
})