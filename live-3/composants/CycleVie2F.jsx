import {useState , useEffect} from "react"
import {Text} from "react-native"

function CycleVie2F (){
    const [nb , setNb] = useState(0)

    useEffect(function(){
        console.log("le composant cycle 2 vient d'être inséré dans la vue ");
        setNb(nb + 1)
        return () => {
            console.log("le composant cycle 2 vient d'être supprimé de la vue")
        }
    } , []);
    useEffect(function(){
        if(nb > 1){
            console.log("le state de nb vient d'être modifié")
        }
    } , [nb])

    return <Text onPress={() => setNb(nb + 1)}>cycle 2 f {nb}</Text>

}

export default CycleVie2F ; 