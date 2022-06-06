import { Text , View  } from "react-native";
import PropTypes from 'prop-types';

export const Quatrieme = ({age , nom , liste}) => {
    return <View>
        <Text>{age + 10}</Text>
        <Text>{nom.toUpperCase()}</Text>
        {liste.map((item , index) => {
            return <Text key={index} >{item}</Text>
        })}
    </View>
}

Quatrieme.propTypes = {
    age : PropTypes.number,
    nom : PropTypes.string,
    liste : PropTypes.array
}