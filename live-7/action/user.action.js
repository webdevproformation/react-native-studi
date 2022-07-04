import axios from "axios";

export const GET_USERS = "GET_USERS";

// action fait deux choses => demande des données à la BDD // et envoyer les données reçues vers le reducer 

export const getUsers = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3004/users")
            .then( (res) => dispatch({type : GET_USERS , payload : res.data}) )
            .catch((err)=> {console.log(err)})
    }
}