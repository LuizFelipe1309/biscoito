import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function App() {

  let frases = [
    "Palmeiras n tem mundial",
    "Com grandes poderes vem grandes responsabilidades",
    "a verdadeira arte é uma explosão",
    "o verdadeiro one piece são os amigos que fizemos ao longo do caminho",
  ];

  const[img, setimg] = useState(require('./src/images/biscoito.png'));
  const[text, settext] = useState('');


  function quebrarbiscoito(){
    setimg(require('./src/images/biscoitoAberto.png'));
    let numeroaleatorio = Math.floor(Math.random() * frases.length);
    settext( ' " ' +frases[numeroaleatorio] + ' " ')
    if (img.src === biscoitoAberto) {}
  }

  function resetarbiscoito(){
    setimg(require('./src/images/biscoito.png'));
    settext('');
  }
  return (
    <SafeAreaView style={styles.container}>

      <Image
      source={img}
      style={styles.image}
      />

      <Text style={styles.text}>
          {text}
      </Text>

      <TouchableOpacity style={styles.btn} onPress={quebrarbiscoito}>
        <Text style={styles.btnText}>
          QUEBRAR BISCOITO
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btn} onPress={resetarbiscoito}>
        <Text style={styles.btnText}>
          RESETAR BISCOITO
        </Text>
      </TouchableOpacity>

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text:{
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: '#ff0000',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 30,
    width: '70%',
    height: '7%',
    margin: 10,
    borderColor: '#ff0000'
  },
  btnText: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
