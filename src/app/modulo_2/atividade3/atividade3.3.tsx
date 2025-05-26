import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView, Alert  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Link, router, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Atv_numeros_subtacao() {

const router = useRouter();

const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
const correctPair = ['A', '1'];


const handleSelect = (option: string)=> {
if (selectedButtons.includes(option)) {
  setSelectedButtons(selectedButtons.filter(btn => btn !== option));
} else if (selectedButtons.length < 2) {
  setSelectedButtons([...selectedButtons, option]);
}
};

const checkAnswer = () => {
  if (selectedButtons.sort().join() === correctPair.sort().join()) {
    Pressionar_barra1 ();
    router.push('/tabs/explore');
  } else {

  }
};

    const [progress, setProgress] = useState(0);
    const [progresso1, setProgresso1] = useState(0);



    const Pressionar_barra1 = () => {
     if (progresso1 < 7) {
       setProgresso1(progresso1 + 1);
       AsyncStorage.setItem('progresso1', String(progresso1 + 1)); 
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



          const carregar_Progresso_1 = async () => {
            try {
              const Progresso1_salvo = await AsyncStorage.getItem('progresso1');
              if (Progresso1_salvo !== null) {
                setProgresso1(Number(Progresso1_salvo)); 
              }
            } catch (error) {
            }
          };


          useEffect(() => {
            carregar_Progresso(); 
            carregar_Progresso_1();
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


     <Text style={styles.titu_tex}>Calcule a subtração e selecione o resultado:</Text>


        <ThemedView style={styles.BlocoFundo}>

      <View style={styles.containeractiv}>
          <TouchableOpacity
          style={[styles.button, selectedButtons.includes('A') && styles.selectedButton]}
          onPress={() => handleSelect('A')}
          >
          <Text style={styles.buttonText}>10-7=</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={[styles.button1, selectedButtons.includes('B') && styles.selectedButton]}
          onPress={() => handleSelect('B')}
          >
         <Image style={styles.box1} source={require('@/assets/images/algarismas/50.jpeg')} resizeMode='contain'/>
          </TouchableOpacity>   

      </View>

      <View style={styles.containeractiv}>
        
          <TouchableOpacity
          style={[styles.button2, selectedButtons.includes('B') && styles.selectedButton]}
          onPress={() => handleSelect('B')}
          >
         <Image style={styles.box2} source={require('@/assets/images/algarismas/7.jpeg')} resizeMode='contain'/>
          </TouchableOpacity>   
      </View>


      <View style={styles.containeractiv}>
        
          <TouchableOpacity
          style={[styles.button2, selectedButtons.includes('1') && styles.selectedButton]}
          onPress={() => handleSelect('1')}
          >
         <Image style={styles.box2} source={require('@/assets/images/algarismas/3.jpeg')} resizeMode='contain'/>
          </TouchableOpacity>   
      </View>


            <View style={styles.containeractiv}>
        
          <TouchableOpacity
          style={[styles.button2, selectedButtons.includes('B') && styles.selectedButton]}
          onPress={() => handleSelect('B')}
          >
         <Image style={styles.box2} source={require('@/assets/images/algarismas/9.jpeg')} resizeMode='contain'/>
          </TouchableOpacity>   
      </View>




       </ThemedView>




             
            <TouchableOpacity style={[styles.botao, selectedButtons.length === 2 && correctPair.includes(selectedButtons[0]) && correctPair.includes(selectedButtons[1]) ? styles.correctButton : styles.wrongButton]} onPress={checkAnswer}>
              <Text style={styles.verifyButtonText}>Continue</Text>
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
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  box1: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  box2: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  button1: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 120,
    marginTop: 10,
    alignItems: 'center',
  },
  button2: {
    width: 110,
    height: 110,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 260,
    marginTop: 30,
    alignItems: 'center',
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
    marginTop: 10,
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
  button: {
   width: 110,
    height: 110,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 30,
  },
  selectedButton: {
    backgroundColor: '#ADD8E6'
  },
  buttonText: {
    fontSize: 38,
    marginTop: 20,
  },
  correctButton: {
    backgroundColor: 'green',
  },
  wrongButton: {
    backgroundColor: 'red'
  },
  verifyButtonText: {
    fontSize: 18,
    color: 'white',
  }
});
