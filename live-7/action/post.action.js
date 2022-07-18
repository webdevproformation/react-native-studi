import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

// action fait deux choses => demande des données à la BDD // et envoyer les données reçues vers le reducer 

export const getArticles = () => {

    return (dispatch) => {
        return axios.get("http://10.0.2.2:3004/articles")
            .then( (res) => dispatch({type : GET_ARTICLES , payload : res.data}) )
            .catch((err)=> {console.log(err)})
    }
}


export const deleteArticle = (id) => {
    return (dispatch) => {
        return axios.delete("http://10.0.2.2:3004/articles/"+id)
            .then( () => dispatch({type : DELETE_ARTICLE , payload : id}) )
            .catch((err)=> {console.log(err)})
    }
}

