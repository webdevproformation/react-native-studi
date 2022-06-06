import { Text , View  } from "react-native";
import {useState , useEffect} from "react"

export const Question = () => {
    const [article, setArticle] = useState({});

    useEffect(() => { 

        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(reponse => reponse.json())
        .then(data  => setArticle(data))

    }, [] )

    return <View>
        <Text>{JSON.stringify(article)}</Text>
    </View>
}
