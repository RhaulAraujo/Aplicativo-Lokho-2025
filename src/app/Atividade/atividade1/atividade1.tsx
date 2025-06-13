import { Image, ImageProps, StyleSheet, Platform, TouchableOpacity, View, ViewStyle, Text, ScrollView, Button, Modal  } from 'react-native';
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
                 Anote e pratique o alfabeto não verbal : 
              </Text>
           </View> 

        <ThemedView style={styles.BlocoFundo}>
         <View style={styles.containeractiv}>
         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/a.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraA.jpeg')} resizeMode='contain'/>
         </TouchableOpacity>
         
         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/b.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraB.jpg')} resizeMode='contain'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/c.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraC.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/d.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraD.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/e.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraE.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/f.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraF.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/g.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraG.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/h.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraH.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/i.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraI.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/j.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraJ.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/k.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraK.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/L.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraL.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/m.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraM.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/n.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraN.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/o.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraO.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/p.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraP.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/q.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraQ.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/r.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraR.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/s.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraS.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/t.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraT.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/u.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraU.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/v.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraV.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/w.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraW.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/x.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraX.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         </View>


         <View style={styles.containeractiv}>
          <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/y.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraY.jpg')} resizeMode='contain'/>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => AbrirVideo('https://rickkskj.github.io/Videos1/z.mp4')}>
         <Image style={styles.box} source={require('@/assets/images/Alfabeto/LetraZ.jpg')} resizeMode='contain'/>
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

          <View>
            <TouchableOpacity style={styles.botao} onPress={gotoActiv}>
              <Text style={styles.texto_botao}>Continue</Text>
            </TouchableOpacity>
          </View>


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
