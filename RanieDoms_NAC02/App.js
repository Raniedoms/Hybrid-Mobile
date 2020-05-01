import React from 'react'
import {
  Image,
  View,
  Button,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  
} from 'react-native'

var imagens = [{
    image: require('./res/img/p0.png')
  },
  {
    image: require('./res/img/p1.png')
  },
  {
    image: require('./res/img/p2.png')
  },
  {
    image: require('./res/img/p3.png')
  },
  {
    image: require('./res/img/p4.png')
  },
  {
    image: require('./res/img/p5.png')
  },
  {
    image: require('./res/img/p6.png')
  }
]




export default class App extends React.Component {

  /* CONTADOR */
  state = {
    contador: 0
  }

  /* MUDANDO FOTOS (FUNCAO) */
  mudarImagem(botao) {
    if (botao == 1) {
      if (this.state.contador == imagens.length - 1) this.setState({
          contador: 0
      })
      else this.setState({
          contador: this.state.contador + 1
      })
    }
   
    else {
      if (this.state.contador == 0) this.setState({
          contador: imagens.length - 1
      })
      else this.setState({
         contador: this.state.contador - 1
      })
    }
  }

  render() {

    return (

      <View style={estilo.fundo}>
      
        <StatusBar backgroundColor = '#05584a'/>

          <Text style = {estilo.texto}>Galeria de Fotos</Text>

          <Image style = {estilo.imagem}
                 source = {imagens[this.state.contador].image}
          />


          <View style={estilo.button}>
             
             <Button                
                color = '#4bb7ab' 
                title = "Próxima Imagem"
                onPress = { _ => this.mudarImagem(1)}/>              
         
             <Button          
               color = '#4bb7ab' 
               title = "Imagem Anterior"
               onPress = { _ => this.mudarImagem (2)}/>
          </View>

      </View>
    )
  }
}


const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({

  fundo:{
    backgroundColor:'#ffd54b'
  },

  texto:{
    backgroundColor: '#018577',
    color: 'white',
    height: 45,
    fontSize: 23,
    padding:8
  },  

  imagem:{
    width:largura, 
    height:largura,
    marginTop:10
  },

  button:{
    flexDirection: "row-reverse",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:50,
   
  }
})
