import { ScrollView , Button , StyleSheet , Image , TextInput , Text } from "react-native"

/* 
manière classique de créer des fonctions en javascript 
function Exemple2(){

} */

// ES6 => fonction fléchée 

const styleExemple = StyleSheet.create({
    img : {
        width : 50,
        height : 50
    },
    input : {
        borderColor : "#000",
        borderWidth : 2 ,
        marginVertical:10,
        padding:5
    }
})

const Exemple2 = () => {
    const hello = () => {
        alert("j'ai cliqué sur le bouton");
    }
    return <ScrollView>
        <Button title="je suis un bouton vert" onPress={hello} color="#000" />
        <Image style={styleExemple.img} 
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <TextInput style={styleExemple.input} />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem ut asperiores quam quisquam maxime corporis porro, nam temporibus impedit, dolorem voluptates architecto quae sint omnis reprehenderit sit non iste quas. Quos perferendis itaque, temporibus magni omnis minus officia eum consequatur necessitatibus. Provident itaque esse delectus molestiae vero repellat. Vel quibusdam corporis quasi, repellendus illum adipisci quas fugit voluptatum architecto hic. Et fuga nobis doloribus animi deleniti sequi ducimus ratione, minima repudiandae blanditiis facere cumque odio voluptate corporis fugit eligendi eius quia! Doloribus earum a aliquam laboriosam sint libero dicta odit deleniti dolor assumenda velit incidunt consequuntur vitae, consequatur cumque dignissimos sapiente perspiciatis quam. Architecto repudiandae sequi vitae. Distinctio debitis explicabo incidunt rerum facilis velit eos ullam veniam, soluta molestias asperiores, consequuntur illum optio placeat, nihil ad assumenda quia delectus sed facere fugit exercitationem! At quam aperiam, ab ratione iure facere reiciendis cum ullam nam nulla quibusdam dolore mollitia temporibus consectetur placeat omnis suscipit! Nihil quaerat commodi architecto fugit animi mollitia nisi, error modi consectetur. Molestiae quisquam dolore doloribus eos amet, fugit sunt atque ipsam nesciunt rerum praesentium aspernatur commodi? Suscipit nemo illo quam amet hic adipisci facilis neque voluptates repellendus, modi autem ipsum laboriosam provident soluta tempora vitae! Dolor ullam quos vero, laboriosam cupiditate vitae nesciunt deserunt perspiciatis necessitatibus ipsa at ut odit quis aliquid, voluptatibus sunt harum, maiores nobis suscipit. Pariatur eligendi nihil corporis quisquam possimus quidem, omnis ipsa iste ipsam, animi cum dolorem, nulla voluptates ea quia quod non? Voluptas, impedit atque illum neque consequuntur expedita est quisquam sapiente. Harum, nemo? Sapiente nihil hic dolor placeat odio cumque quaerat voluptatem corporis consequuntur, dolorem delectus ipsam et possimus, fugit perspiciatis labore quidem fuga nobis nemo laboriosam obcaecati voluptate numquam. Ex maxime sequi eum harum iste nisi assumenda tenetur aliquam explicabo est, impedit ad, sint dolor facere! Et, deserunt eius quaerat porro autem fugiat error exercitationem illum! Tenetur, architecto? Tenetur animi nam soluta eos, odit tempora et. Quos voluptate neque amet rem numquam eius, et, esse recusandae dolores quasi perspiciatis quisquam incidunt vero voluptatem iusto doloribus, ad doloremque libero! Ratione, unde quo ullam quam, optio minima eaque, aliquid accusantium deserunt molestiae reiciendis rem in accusamus modi expedita cupiditate possimus fugit? Ut laboriosam accusamus adipisci aut ratione exercitationem dolorum itaque sequi aliquam nemo quam corporis facere minima tempora, aperiam vitae et, deleniti voluptatum praesentium illum voluptatibus natus velit? Illo est optio ab facilis excepturi aspernatur itaque voluptate eum, architecto consequatur.</Text>
    </ScrollView>
}



export default Exemple2 ; 