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
    const [progress1, setProgress1] = useState(0);
    
  

   const handlePress1 = () => {
    if (progress1 < 4) {
      setProgress1(progress1 + 1);
      AsyncStorage.setItem('progress1', String(progress1 + 1)); 
    }
  };


        function gotoActiv(){
        handlePress1 ();
        router.push("/tabs/explore")
        }


        const loadProgress = async () => {
            try {
              const savedProgress = await AsyncStorage.getItem('progress');
              if (savedProgress !== null) {
                setProgress(Number(savedProgress)); // Carrega o progresso salvo
              }
            } catch (error) {
              console.error('Failed to load progress', error);
            }
          };



          const loadProgress1 = async () => {
            try {
              const savedProgress1 = await AsyncStorage.getItem('progress1');
              if (savedProgress1 !== null) {
                setProgress1(Number(savedProgress1)); // Carrega o progresso salvo
              }
            } catch (error) {
              console.error('Failed to load progress', error);
            }
          };
          

          useEffect(() => {
            loadProgress(); // Carrega o progresso quando a página for montada
            loadProgress1();
          }, []);



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

        <ThemedView style={styles.BlocoFundo}>
             <View style={styles.containeractiv}>
             <Image style={styles.box} source={require('@/assets/images/Numeros/Numeros_de_1_a_5.jpeg')} resizeMode='contain'/>
             <Image style={styles.box} source={require('@/assets/images/Numeros/Numeros_de_6_a_9.jpeg')} resizeMode='contain'/>
             <Image style={styles.box} source={require('@/assets/images/Numeros/Decimais_de_10_a_50.jpeg')} resizeMode='contain'/>
             <Image style={styles.box} source={require('@/assets/images/Numeros/Decimais_de_60_a_100.jpeg')} resizeMode='contain'/>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
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
    marginLeft: 100,
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
