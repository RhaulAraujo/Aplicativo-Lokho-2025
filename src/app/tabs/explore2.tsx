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
import { getAuth, signOut } from "firebase/auth";
import { auth } from '@/src/database/firebase';
import index from '@/src/app/index';



export default function TabTwoScreen() {

  const Sair_usuario = async () => {
    signOut(auth).then(() =>{
      router.push("/")
    }).catch((error) => {

    });
  }


      return (
      <ScrollView style={styles.container}>

      
        <ThemedView style={styles.topo_caixa}>
             
         <View style={styles.containeractiv}>
           <Image style={styles.box} source={require('@/assets/images/ativ-1/letra_a.jpeg')} resizeMode='contain'/>
         </View>

      <View style={styles.caixa_botão1}>
        <TouchableOpacity style={styles.botão}  onPress={Sair_usuario}>
       <Text style={styles.texto_botão}>Sair</Text>
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
  },
  topo_caixa: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   height: Dimensions.get('window').height/2,
    width: '100%',
    padding: 15,
    marginLeft: 5,
  },
    box: {
    width: 150,
    height: 120,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 250,
    marginLeft: 120,
  },
    containeractiv: {
    padding: 1,
  },
    caixa_botão1: {
    //height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 100,
    marginLeft: 3,
  },
    botão: {
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
  },
    texto_botão: {
    fontSize: 16,
    color: '#c76700',
    fontWeight: 'bold',
  },
});
