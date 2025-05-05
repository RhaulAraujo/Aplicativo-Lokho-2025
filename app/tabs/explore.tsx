import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, Button, ViewStyle, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import atividade from '@/app/Atividade/atividade1/atividade1';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TabTwoScreen() {
      const [progress1, setProgress1] = useState(0);

      const handlePress = () => {
        if (progress1 < 5) {
          setProgress1(progress1 + 1);
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
        loadProgress1(); // Carrega o progresso quando a página for montada
      }, []);




        function gotoActiv(){
        router.push("/Atividade/atividade1/atividade1")
        }
        function gotoActiv2(){
        router.push("/Atividade/atividade2/atividade2")
        }
        function gotoActiv3(){
        router.push("/Atividade/atividade3/atividade3")
        }
        function gotoActiv4(){
        router.push("/Atividade/atividade4/atividade4")
        }


        function gotomod2_ativ1(){
          router.push("/modulo_2/atividade1/atividade1")
        }
        function gotomod2_ativ2(){
          router.push("/modulo_2/atividade2/atividade2")
        }
        function gotomod2_ativ3(){
          router.push("/modulo_2/atividade3/atividade3")
        }


        function gotomod3_ativ1(){
          router.push("/modulo_3/atividade1/atividade1")
        }
        function gotomod3_ativ2(){
          router.push("/modulo_3/atividade2/atividade2")
        }
        function gotomod3_ativ3(){
          router.push("/modulo_3/atividade3/atividade3")
        }


      return (
      <ScrollView style={styles.container}>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Opção 1')}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}></Text>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Opção 2')}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.nav}>
        <ThemedText style={styles.titu_tex3}>Iniciante</ThemedText>
        <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, 
          { 
            backgroundColor: progress1 >= 5 ? 'blue' : 'blue',
            width: `${progress1 * 22.22}%`,
            } as ViewStyle, 
          ]} 
          />
        </View>
      </View>

        <ThemedView style={styles.boxtop}>
          <ThemedText style={styles.titu_tex1}>Módulo 1</ThemedText>
            <ThemedText style={styles.subtitu_tex1}>0/4 Atividades</ThemedText>
              <View style={styles.containeractiv}>
                <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
                <TouchableOpacity style={styles.navItem} onPress={gotoActiv}>   
                  <ThemedText style={styles.foto_texto}>Alfabeto</ThemedText>
                  </TouchableOpacity>
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotoActiv2}>
              <ThemedText style={styles.foto_texto2}>Cumprimentos</ThemedText>
              </TouchableOpacity>  
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotoActiv3}>
              <ThemedText style={styles.foto_texto3}>Soletrando</ThemedText>
              </TouchableOpacity>
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotoActiv4}>
              <ThemedText style={styles.foto_texto4}>Frases</ThemedText>
              </TouchableOpacity>
              </View>




              <ThemedText style={styles.titu_tex1}>Módulo 2</ThemedText>
            <ThemedText style={styles.subtitu_tex1}>0/3 Atividades</ThemedText>
              <View style={styles.containeractiv}>
                <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
                <TouchableOpacity style={styles.navItem} onPress={gotomod2_ativ1}>   
                  <ThemedText style={styles.foto_texto}>yyyyyyyy</ThemedText>
                  </TouchableOpacity>
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotomod2_ativ2}>
              <ThemedText style={styles.foto_texto2}>xxxxxxxxx</ThemedText>
              </TouchableOpacity>  
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotomod2_ativ3}>
              <ThemedText style={styles.foto_texto2}>zzzzzzz</ThemedText>
              </TouchableOpacity>  
              </View>



              <ThemedText style={styles.titu_tex1}>Módulo 3</ThemedText>
            <ThemedText style={styles.subtitu_tex1}>0/3 Atividades</ThemedText>
              <View style={styles.containeractiv}>
                <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
                <TouchableOpacity style={styles.navItem} onPress={gotomod3_ativ1}>   
                  <ThemedText style={styles.foto_texto}>aaaaaaa</ThemedText>
                  </TouchableOpacity>
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotomod3_ativ2}>
              <ThemedText style={styles.foto_texto2}>bbbbbbbb</ThemedText>
              </TouchableOpacity>  
              </View>

              <View style={styles.containeractiv}>
              <Image style={styles.Foto_t} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.navItem} onPress={gotomod3_ativ3}>
              <ThemedText style={styles.foto_texto2}>ccccccc</ThemedText>
              </TouchableOpacity>  
              </View>



        </ThemedView>

      </ScrollView>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
 //   alignItems: 'center',
   // justifyContent: 'center',
  },
  progressBarContainer: {
    width: '60%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
  },
  boxtop: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   height: Dimensions.get('window').height/2,
    width: '100%',
    padding: 15,
    marginLeft: 5,
  },
  boxMid: {
    backgroundColor: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
    //height: Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titu_tex: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
  },
  titu_tex3: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  titu_tex1: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitu_tex1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
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
  navBar: {
    width: '100%',
    height: 60, // altura da barra
    backgroundColor: 'white',
    flexDirection: 'row', // Organizar os itens da barra em linha
    justifyContent: 'space-between', // Espaçar os itens igualmente
    alignItems: 'center', // Centralizar verticalmente
    paddingHorizontal: 16, // Distância das bordas   
    },
    navItem: {
      padding: 8,
    },
    navTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    Foto_t: {
      marginTop: 15,
      height: 90,
      width: 90,
    },
    foto_texto: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
    foto_texto2: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
    foto_texto3: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
    foto_texto4: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
    containeractiv: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
});
