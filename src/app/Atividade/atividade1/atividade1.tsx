import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView, Button  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Alfabeto() {

       const [progress, setProgress] = useState(0);
  
       const Pressionar_barra = () => {
        if (progress < 4) {
          setProgress(progress + 1);
          AsyncStorage.setItem('progress', String(progress + 1));
        }
      };



        function gotoActiv(){
        Pressionar_barra ();
        router.push("/Atividade/atividade1/atividade1.2")
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
                 Anote e pratique o alfabeto não verbal : 
              </Text>
           </View> 

        <ThemedView style={styles.BlocoFundo}>
         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraA.jpeg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraB.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraC.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraD.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraE.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraF.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraG.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraH.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraI.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraJ.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraK.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraL.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraM.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraN.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraO.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraP.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraQ.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraR.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraS.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraT.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraU.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraV.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraW.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraX.jpg')} resizeMode='contain'/>
         </View>


         <View style={styles.containeractiv}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraY.jpg')} resizeMode='contain'/>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraZ.jpg')} resizeMode='contain'/>
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
    marginLeft: 80,
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
