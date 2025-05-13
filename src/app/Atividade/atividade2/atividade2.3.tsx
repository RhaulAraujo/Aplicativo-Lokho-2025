import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView, TextInput  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { reload } from 'expo-router/build/global-state/routing';



export default function Atv_Alfabeto() {
    const [palavra_1, setPalavra_1] = useState('');
    const [palavra_8, setPalavra_8] = useState('');
    const [palavra_5, setPalavra_5] = useState('');
    const [palavra_4, setPalavra_4] = useState('');
    const [palavra_9, setPalavra_9] = useState('');
    const [palavra_0, setPalavra_0] = useState('');



    const [isError, setIsError] = useState(false);
    const router = useRouter();

    const [letter, setLetter] = useState<string>('')
    const [progress, setProgress] = useState(0);
  

    const verificarLetra = () => {
      if (palavra_1.toUpperCase() === '1', palavra_8.toUpperCase() == '8', palavra_5.toUpperCase() == '5', palavra_4.toUpperCase() == '4', palavra_9.toUpperCase() == '9', palavra_0.toUpperCase() == '0') {
        setIsError(false);
        Pressionar_barra ();
        router.push("/Atividade/atividade2/atividade2.4")
      } else {
        setIsError(true);
      }
    };

   

    const Pressionar_barra = () => {
     if (progress < 4) {
       setProgress(progress + 1);
       AsyncStorage.setItem('progress', String(progress + 1)); 
     }
   };




        const carregar_Progresso = async () => {
            try {
              const savedProgress = await AsyncStorage.getItem('progress');
              if (savedProgress !== null) {
                setProgress(Number(savedProgress)); 
              }
            } catch (error) {
            }
          };

          useEffect(() => {
            carregar_Progresso(); 
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
         <Image style={styles.box} source={require('@/assets/images/algarismas/1.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, isError && styles.inputErro]} 
          placeholder="" 
          maxLength={1} 
          value={palavra_1}
          onChangeText={setPalavra_1}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/8.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, isError && styles.inputErro]} 
          placeholder="" 
          maxLength={1} 
          value={palavra_8}
          onChangeText={setPalavra_8}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/5.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, isError && styles.inputErro]} 
          placeholder=""
          maxLength={1} 
          value={palavra_5}
          onChangeText={setPalavra_5}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/4.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, isError && styles.inputErro]} 
          placeholder="" 
          maxLength={1} 
          value={palavra_4}
          onChangeText={setPalavra_4}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/9.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, isError && styles.inputErro]} 
          placeholder="" 
          maxLength={1} 
          value={palavra_9}
          onChangeText={setPalavra_9}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/0.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, isError && styles.inputErro]} 
          placeholder=""
          maxLength={1} 
          value={palavra_0}
          onChangeText={setPalavra_0}
          autoCapitalize="characters"
         />
         </View>



       </ThemedView>




             
            <TouchableOpacity style={styles.botao} onPress={verificarLetra}>
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
    width: 150,
    height: 120,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
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
  input: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    marginLeft: 40,
    marginTop: 30,
  },
  inputErro: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'red',
    marginLeft: 40,
    marginTop: 30,
  },



});
