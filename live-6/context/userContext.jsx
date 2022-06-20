import { createContext , useState } from "react";

export const UserContext = createContext(); // store partager au près de tous les composants enfants

export const UserContextProvider = (props) => { // partager les informations auprès de tous ses composants enfants

    const [profil , setProfil] = useState( { id : 1 , nom : "Alain" , isConnected : false } );

    return <UserContext.Provider value={ {...profil , setProfil} }>
        {props.children}
    </UserContext.Provider>

}


