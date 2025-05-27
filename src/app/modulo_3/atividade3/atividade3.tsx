import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function atv3_soletrando() {

    const [progress, setProgress] = useState(0);
  
    const Pressionar_barra = () => {
     if (progress < 3) {
       setProgress(progress + 1);
       AsyncStorage.setItem('progress', String(progress + 1)); 
     }
   };



        function gotoActiv(){
        Pressionar_barra ();
        router.push("/modulo_3/atividade3/atividade3.2")
        }

    



  return (
    <ScrollView style={styles.container}>

      <View style={styles.nav}>
        <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, 
          { 
            backgroundColor: progress >= 4 ? 'blue' : 'blue',
            width: `${progress * 33.33}%`,
            } as ViewStyle, 
          ]} 
          />
        </View>
      </View>

   <View style={styles.containeractiv}>
              <Text style={styles.titu_tex}>
                Pratique como gesticular as formas Geométricas em LIBRAS: 
              </Text>
           </View> 


        <ThemedView style={styles.BlocoFundo}>
             <View style={styles.containeractiv}>
             <Image style={styles.box} source={require('@/assets/images/Formas/triangulo_sinal e frase.jpeg')} resizeMode='contain'/>
            </View>

             <View style={styles.containeractiv}>
             <Image style={styles.box} source={require('@/assets/images/Formas/retangulo_sinal e frase.jpeg')} resizeMode='contain'/>
              </View>

             <View style={styles.containeractiv}>
             <Image style={styles.box} source={require('@/assets/images/Formas/Estrela_sinal e frase.jpeg')} resizeMode='contain'/>
              </View>

             <View style={styles.containeractiv}>
             <Image style={styles.box} source={require('@/assets/images/Formas/Quadrado_sinal e frase.jpeg')} resizeMode='contain'/>
             </View>

              <View style={styles.containeractiv}>
             <Image style={styles.box} source={require('@/assets/images/Formas/Circulo_sinal e frase.jpeg')} resizeMode='contain'/>
             </View>
        </ThemedView>
 

            <TouchableOpacity style={styles.botao} onPress={gotoActiv}>
              <Text style={styles.texto_botao}>Continue</Text>
            </TouchableOpacity>
    



    </ScrollView>

  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:  '#be6704',
  },
  logo: {
    height: 80,
    width: 80,
  },
  titu_tex: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
  },
  progressBarContainer: {
    width: '60%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 90,

  },
  progressBar: {
    height: '100%',
  },
  nav: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  containeractiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  botao: {
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation:7,
    marginTop: 20,
    marginLeft: 90,
    marginEnd: 50,
  },
  texto_botao: {
    fontSize: 16,
    color: '#c76700',
    fontWeight: 'bold',
  },
  BlocoFundo: {
    padding: 10,
    backgroundColor: '#fcbf6f',
    borderRadius: 10,
    marginBlock: 10,
  },
});
