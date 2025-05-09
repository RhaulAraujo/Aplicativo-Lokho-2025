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




export default function Atv_numeros() {

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
    Alert.alert('Par correto! Avançando...');
    router.push('/tabs/explore');
  } else {
    Alert.alert('Par incorreto! Tente novamente.');
  }
};

    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);

    const handlePress = () => {
     if (progress < 5) {
       setProgress(progress + 1);
       AsyncStorage.setItem('progress', String(progress + 1)); // Salva o progresso
     }
   };


    const handlePress1 = () => {
     if (progress1 < 1) {
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



          useEffect(() => {
            loadProgress(); // Carrega o progresso quando a página for montada
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

          <TouchableOpacity
          style={[styles.button, selectedButtons.includes('A') && styles.selectedButton]}
          onPress={() => handleSelect('A')}
          >
            <Text style={styles.buttonText}>A</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={[styles.button, selectedButtons.includes('B') && styles.selectedButton]}
          onPress={() => handleSelect('B')}
          >
            <Text style={styles.buttonText}>B</Text>
          </TouchableOpacity>





       </ThemedView>




             
            <TouchableOpacity style={[styles.verifyButton, selectedButtons.length === 2 && correctPair.includes(selectedButtons[0]) && correctPair.includes(selectedButtons[1]) ? styles.correctButton : styles.wrongButton]} onPress={checkAnswer}>
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
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
    margin: 10,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: '#ADD8E6'
  },
  buttonText: {
    fontSize: 18,
  },
  correctButton: {
    backgroundColor: 'green',
  },
  wrongButton: {
    backgroundColor: 'red'
  },
  verifyButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#DDD"
  },
  verifyButtonText: {
    fontSize: 18,
    color: 'white',
  }
});
