import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView, Alert  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function atv3_soletrando() {

    const [palavra_A, setPalavra_A] = useState('');
      const [palavra_P, setPalavra_P] = useState('');
      const [palavra_N, setPalavra_N] = useState('');
      const [palavra_W, setPalavra_W] = useState('');
      const [palavra_J, setPalavra_J] = useState('');
      const [palavra_X, setPalavra_X] = useState('');
  
  
  
      const [isError, setIsError] = useState(false);
      const router = useRouter();
  
      const [letter, setLetter] = useState<string>('')
    
      const verificarLetra = () => {
        if (palavra_A.toUpperCase() === 'A', palavra_P.toUpperCase() == 'P', palavra_N.toUpperCase() == 'N', palavra_W.toUpperCase() == 'W', palavra_J.toUpperCase() == 'J', palavra_X.toUpperCase() == 'X') {
          setIsError(false);
          Pressionar_barra ();
          router.push("/modulo_3/atividade2/atividade2.3")
        } else {
          setIsError(true);
        }
      };


    const [progress, setProgress] = useState(0);
  
    const Pressionar_barra = () => {
     if (progress < 3) {
       setProgress(progress + 1);
       AsyncStorage.setItem('progress', String(progress + 1)); 
     }
   };



        function gotoActiv(){
        Pressionar_barra ();
        router.push("/modulo_3/atividade2/atividade2.3")
        }


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

        <ThemedView style={styles.BlocoFundo}>
        
        <View style={styles.containeractiv}>
        <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_a.jpeg')} resizeMode='contain'/>
        <TextInput 
        style={[styles.input, isError && styles.inputErro]} 
        placeholder="" 
        maxLength={1} 
        value={palavra_A}
        onChangeText={setPalavra_A}
        autoCapitalize="characters"
        />
        </View>
        
        <View style={styles.containeractiv}>
        <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_p.jpeg')} resizeMode='contain'/>
        <TextInput 
        style={[styles.input, isError && styles.inputErro]} 
        placeholder="" 
        maxLength={1} 
        value={palavra_P}
        onChangeText={setPalavra_P}
        autoCapitalize="characters"
        />
        </View>
        
        <View style={styles.containeractiv}>
        <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_n.jpeg')} resizeMode='contain'/>
        <TextInput 
        style={[styles.input, isError && styles.inputErro]} 
        placeholder=""
        maxLength={1} 
        value={palavra_N}
        onChangeText={setPalavra_N}
        autoCapitalize="characters"
        />
        </View>
        
        <View style={styles.containeractiv}>
        <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_w.jpeg')} resizeMode='contain'/>
        <TextInput 
        style={[styles.input, isError && styles.inputErro]} 
        placeholder="" 
        maxLength={1} 
        value={palavra_W}
        onChangeText={setPalavra_W}
        autoCapitalize="characters"
        />
        </View>
        
        <View style={styles.containeractiv}>
        <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_j.jpeg')} resizeMode='contain'/>
        <TextInput 
        style={[styles.input, isError && styles.inputErro]} 
        placeholder="" 
        maxLength={1} 
        value={palavra_J}
        onChangeText={setPalavra_J}
        autoCapitalize="characters"
        />
        </View>
        
        <View style={styles.containeractiv}>
        <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_x.jpeg')} resizeMode='contain'/>
        <TextInput 
        style={[styles.input, isError && styles.inputErro]} 
        placeholder=""
        maxLength={1} 
        value={palavra_X}
        onChangeText={setPalavra_X}
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
