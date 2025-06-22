import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView, Button, Modal  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  {ResizeMode, Video} from 'expo-av' ;
import { AVPlaybackStatus } from 'expo-av';




export default function Cumprimentos_basicos() {

    const [progress, setProgress] = useState(0);
  
    const Pressionar_barra = () => {
     if (progress < 4) {
       setProgress(progress + 1);
       AsyncStorage.setItem('progress', String(progress + 1)); 
     }
   };



        function gotoActiv(){
        Pressionar_barra ();
        router.push("/Atividade/atividade2/atividade2.2")
        }

        const [TelaVisivel, setTelaVisivel] = useState(false);
        const [Video1, setVideo1] = useState<string | null>(null);
                
        const AbrirVideo = (uri: string) => {
        setVideo1(uri);
        setTelaVisivel(true);
        };
        
        const FecharVideo = () => {
        setTelaVisivel(false);
        setVideo1(null);
        };
        



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
                Anote e pratique a numeração não verbal: (ao clicar na imagem irá aparecer um vídeo ensinando a fazer os gestos corretamente)
              </Text>
           </View> 

  <ThemedView style={styles.BlocoFundo}>
         <View style={styles.containeractiv}>
         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/1.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/1.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>
         
         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/2.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/2.jpeg')} resizeMode='contain'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/3.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/3.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/4.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/4.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/5.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/5.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/6.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/6.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/7.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/7.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/8.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/8.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/9.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/9.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/0.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/algarismas/0.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>
        </ThemedView>

        <Modal visible={TelaVisivel} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            {Video1 && (
            <Video
              source={{ uri: Video1 }}
              style={styles.video}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay
              onPlaybackStatusUpdate={(status: AVPlaybackStatus) =>{
                if (status.isLoaded && status.playableDurationMillis && status.positionMillis >= status.playableDurationMillis ){
                  FecharVideo();
                }
                }}
            />
          )}
          </View>
        </Modal>


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
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  video: {
    width: '100%',
    height: 300,
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
    marginLeft: 20,
    alignItems: 'center',
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
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
