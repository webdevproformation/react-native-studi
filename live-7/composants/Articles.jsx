import { StyleSheet, Text, View , ScrollView , Button } from 'react-native';
import { useSelector , useDispatch } from "react-redux";
import { Article } from "./Article"
import { getArticles, deleteArticle } from "../action/post.action";

export function Articles () {
    const dispatch = useDispatch();

   // dispatch(getArticles()); 

    const articles = useSelector((state) => {
        return state.articleReducer 
    });
    


    const deleteArticleUI = (id) => {
        console.log(id)
        dispatch(deleteArticle(id));
    }
    console.log(articles);
 
    return <ScrollView>
        { articles.map((article , index ) => { 
            return <View key={index}  style={styles.block}>
                <Text style={styles.titre}>{ article.title }</Text>
                <Text style={styles.body}>{article.body }</Text>
                <Button title={`supprimer article ${article.id}`} onPress={() => {
                    deleteArticleUI(article.id) }}  />
            </View>
         })  }
    </ScrollView>
}

const styles = StyleSheet.create({
    block : {
        margin : 20
    },
    titre: {
     fontSize:20,
     marginVertical:5
    },
    body : {
        marginBottom: 10
    }
});

// objet en javascript 
// https://yogalayout.com/