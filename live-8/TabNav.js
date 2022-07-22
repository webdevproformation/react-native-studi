import { View , Text , StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons"
// https://github.com/oblador/react-native-vector-icons/tree/master/glyphmaps
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

const TabBottom = createBottomTabNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <TabBottom.Navigator>
              <TabBottom.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  )
              }} />  
              <TabBottom.Screen name="Contact" component={Contact} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cards-spade" color={color} size={size} />
                  )
              }}/>  
              <TabBottom.Screen name="Profil" component={Profil} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
                  )
              }}/>  
            </TabBottom.Navigator>
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