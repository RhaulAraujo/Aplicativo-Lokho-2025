import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, Button, ViewStyle, ScrollView, Alert } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Collapsible } from '@/components/Collapsible';
import { useRouter } from 'expo-router';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, {useState, useEffect} from 'react';
import { Link, router } from 'expo-router';
import atividade from '@/src/app/Atividade/atividade1/atividade1';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Página_inicial() {

const [desbloqueio, setDesbloqueio] = useState<boolean>(false);
const router = useRouter();

useEffect(() => {
  const veja_Progresso = async () => {
    const Progresso_salvo = await AsyncStorage.getItem('DesbloqueieModulos');
    setDesbloqueio(Progresso_salvo ? JSON.parse(Progresso_salvo) : false);
  };
  veja_Progresso();
}, []);


const acesse_Atividade1 = () => {
  setDesbloqueio(true);
  AsyncStorage.setItem('DesbloqueieModulos', JSON.stringify(true));
  router.push("/Atividade/atividade1/atividade1")
};

const acesse_Modulo_trancado = () =>{
  Alert.alert('Este módulo está bloqueado! Complete a Atividade 1.');
};
  
      const [progresso1, setProgresso1] = useState(0);



      const carregar_Progresso_1 = async () => {
        try {
          const Progresso1_salvo = await AsyncStorage.getItem('progresso1');
          if (Progresso1_salvo !== null) {
            setProgresso1(Number(Progresso1_salvo)); 
          }
        } catch (error) {
          console.error('Falhou', error);
        }
      };

      useEffect(() => {
        carregar_Progresso_1(); 
      }, []);




      return (
      <ScrollView style={styles.container}>

      <View style={styles.navegação}>
        <ThemedText style={styles.titulo_texto3}>Iniciante</ThemedText>
        <View style={styles.progresso_Barra_Container}>
        <View style={[styles.progresso_da_Barra, 
          { 
            backgroundColor: progresso1 >= 10 ? 'blue' : 'blue',
            width: `${progresso1 * 11.11}%`,
            } as ViewStyle, 
          ]} 
          />
        </View>
      </View>

        <ThemedView style={styles.topo_caixa}>
          <ThemedText style={styles.titulo_texto1}>Módulo 1</ThemedText>
            <ThemedText style={styles.subtitulo_texto1}>4 Atividades</ThemedText>
              <View style={styles.container_dividido}>
                <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
                <TouchableOpacity onPress={acesse_Atividade1}>
                <ThemedText style={styles.foto_texto}>Alfabeto</ThemedText>
                </TouchableOpacity>
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/Atividade/atividade2/atividade2") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto2}>Algarismos</ThemedText>
              </TouchableOpacity>  
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/Atividade/atividade3/atividade3") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto3}>Cumprimentos</ThemedText>
              </TouchableOpacity>
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/Atividade/atividade4/atividade4") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto4}>Revisão</ThemedText>
              </TouchableOpacity>
              </View>




              <ThemedText style={styles.titulo_texto1}>Módulo 2</ThemedText>
            <ThemedText style={styles.subtitulo_texto1}>3 Atividades</ThemedText>
              <View style={styles.container_dividido}>
                <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
                <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/modulo_2/atividade1/atividade1") : acesse_Modulo_trancado}>   
                  <ThemedText style={styles.foto_texto}>Soletrando</ThemedText>
                  </TouchableOpacity>
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/modulo_2/atividade2/atividade2") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto2}>Soma</ThemedText>
              </TouchableOpacity>  
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/modulo_2/atividade3/atividade3") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto2}>Subtração</ThemedText>
              </TouchableOpacity>  
              </View>



              <ThemedText style={styles.titulo_texto1}>Módulo 3</ThemedText>
            <ThemedText style={styles.subtitulo_texto1}>3 Atividades</ThemedText>
              <View style={styles.container_dividido}>
                <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
                <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/modulo_3/atividade1/atividade1") : acesse_Modulo_trancado}>   
                  <ThemedText style={styles.foto_texto}>Cores</ThemedText>
                  </TouchableOpacity>
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/modulo_3/atividade2/atividade2") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto2}>Animais</ThemedText>
              </TouchableOpacity>  
              </View>

              <View style={styles.container_dividido}>
              <Image style={styles.Foto_container} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
              <TouchableOpacity style={styles.Item_navegação} onPress={desbloqueio ? () => router.push("/modulo_3/atividade3/atividade3") : acesse_Modulo_trancado}>
              <ThemedText style={styles.foto_texto2}>Formas</ThemedText>
              </TouchableOpacity>  
              </View>



        </ThemedView>

      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
 //   alignItems: 'center',
   // justifyContent: 'center',
  },
  progresso_Barra_Container: {
    width: '60%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 10,
  },
  progresso_da_Barra: {
    height: '100%',
  },
  topo_caixa: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   //height: Dimensions.get('window').height/2,
    width: '100%',
    padding: 15,
    marginLeft: 5,
  },
  titulo_texto3: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  titulo_texto1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitulo_texto1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  navegação: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  Barra_de_navegação: {
    width: '100%',
    height: 60, 
    backgroundColor: 'white',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    },
    Item_navegação: {
      padding: 8,
    },
    Titulo_navegação: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    Foto_container: {
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
    container_dividido: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
});
