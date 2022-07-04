import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

// action fait deux choses => demande des données à la BDD // et envoyer les données reçues vers le reducer 

export const getArticles = () => {

    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( (res) => dispatch({type : GET_ARTICLES , payload : res.data}) )
            .catch((err)=> {console.log(err)})
    }
}


export const deleteArticle = (id) => {
    return (dispatch) => {
        return axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
            .then( () => dispatch({type : DELETE_ARTICLE , payload : id}) )
            .catch((err)=> {console.log(err)})
    }
}

