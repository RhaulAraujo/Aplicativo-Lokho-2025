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



export default function Atv_Soma() {
    const [palavra_A, setPalavra_A] = useState('');
    const [palavra_B, setPalavra_B] = useState('');
    const [palavra_C, setPalavra_C] = useState('');
    const [palavra_D, setPalavra_D] = useState('');
    const [palavra_E, setPalavra_E] = useState('');
    const [palavra_F, setPalavra_F] = useState('');


    const [erro_palavra_A, setErro_palavra_A] = useState(false);
    const [erro_palavra_B, setErro_palavra_B] = useState(false);
    const [erro_palavra_C, setErro_palavra_C] = useState(false);
    const [erro_palavra_D, setErro_palavra_D] = useState(false);
    const [erro_palavra_E, setErro_palavra_E] = useState(false);
    const [erro_palavra_F, setErro_palavra_F] = useState(false);



    const router = useRouter();

    const [progress, setProgress] = useState(0);
  

    const verificarLetra = () => {
      const palavra_A_certo = palavra_A.toUpperCase() === '9';
      const palavra_B_certo = palavra_B.toUpperCase() === '3';
      const palavra_C_certo = palavra_C.toUpperCase() === '8';
      const palavra_D_certo = palavra_D.toUpperCase() === '10';
      const palavra_E_certo = palavra_E.toUpperCase() === '10';
      const palavra_F_certo = palavra_F.toUpperCase() === '7';


      setErro_palavra_A(!palavra_A_certo);
      setErro_palavra_B(!palavra_B_certo);
      setErro_palavra_C(!palavra_C_certo);
      setErro_palavra_D(!palavra_D_certo);
      setErro_palavra_E(!palavra_E_certo);
      setErro_palavra_F(!palavra_F_certo);


      if (palavra_A_certo && palavra_B_certo && palavra_C_certo && palavra_D_certo && palavra_E_certo && palavra_F_certo) {
        Pressionar_barra ();
        router.push("/modulo_2/atividade2/atividade2.3")
      }
    };

   

    const Pressionar_barra = () => {
     if (progress < 3) {
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
            backgroundColor: progress >= 3 ? 'blue' : 'blue',
            width: `${progress * 33.33}%`,
            } as ViewStyle, 
          ]} 
          />
        </View>
      </View>

     <Text style={styles.titu_tex}>Calcule a soma e digite o resultado:</Text>


        <ThemedView style={styles.BlocoFundo}>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/ativ-4/0,9.jpg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, erro_palavra_A && styles.inputErro]} 
          placeholder="" 
          maxLength={2} 
          value={palavra_A}
          onChangeText={setPalavra_A}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/ativ-4/1,2.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, erro_palavra_B && styles.inputErro]} 
          placeholder="" 
          maxLength={2} 
          value={palavra_B}
          onChangeText={setPalavra_B}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/ativ-4/3,3.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, erro_palavra_C && styles.inputErro]} 
          placeholder=""
          maxLength={2} 
          value={palavra_C}
          onChangeText={setPalavra_C}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/ativ-4/5,5.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, erro_palavra_D && styles.inputErro]} 
          placeholder="" 
          maxLength={2} 
          value={palavra_D}
          onChangeText={setPalavra_D}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/ativ-4/3,7.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, erro_palavra_E && styles.inputErro]} 
          placeholder="" 
          maxLength={2} 
          value={palavra_E}
          onChangeText={setPalavra_E}
          autoCapitalize="characters"
         />
         </View>

         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/ativ-4/6,1.jpeg')} resizeMode='contain'/>
         <TextInput 
          style={[styles.input, erro_palavra_F && styles.inputErro]} 
          placeholder=""
          maxLength={2} 
          value={palavra_F}
          onChangeText={setPalavra_F}
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    padding: 10,
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
    width: 140,
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
    width: 140,
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
