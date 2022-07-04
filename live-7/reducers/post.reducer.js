import { GET_ARTICLES , DELETE_ARTICLE} from '../action/post.action';

const initialState = [];

export default function articleReducer (state = initialState , action) {
    switch(action.type){
        case GET_ARTICLES: 
            return action.payload ; // envoyée au store 

        case DELETE_ARTICLE : 
            return state.filter((item) => { 
                return item.id !== action.payload
            })
        default :
            return state;
    }
}