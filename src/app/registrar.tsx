import { Image, StyleSheet, Platform, TouchableOpacity, TextInput, View, Text} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TabRouter } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import explore from '@/src/app/tabs/explore';
import { Link, router } from 'expo-router';


export default function registrar() {
  function vá_para_explore(){
    router.push("/tabs/explore")
}
  return (
    <ThemedView style={styles.container}>

    <ThemedView style={styles.Topo_caixa}>
    <Image style={styles.logo} source={require('@/assets/images/lbs.png')} resizeMode='contain'></Image>
    <ThemedText style={styles.titulo_texto}>Criar Conta</ThemedText>
   </ThemedView>

    <ThemedView style={styles.Meio_caixa}>
     <ThemedText style={styles.titulo_input}>Inscreva-se com um E-mail</ThemedText>
    <View style={styles.caixa_input}>
      <TextInput 
        style={styles.input}
      />
      <MaterialIcons 
        name='email'
        size={20}
        color={'#808080'}
      />
    </View>

      <ThemedText style={styles.titulo_input}>Criar uma Senha</ThemedText>
      <View style={styles.caixa_input}>
      <TextInput 
        style={styles.input}
      />
      <MaterialIcons 
        name='remove-red-eye'
        size={20}
        color={'#808080'}
      />
    </View>
    
       <View style={styles.caixa_botão}>
        <TouchableOpacity style={styles.botão} onPress={vá_para_explore}>
          <Text style={styles.texto_botao}>CRIAR</Text>
        </TouchableOpacity>
       </View>
      
    </ThemedView>
                                
 </ThemedView>

  );}

const styles = StyleSheet.create({
  Topo_caixa: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Meio_caixa: {
    backgroundColor: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
    //height: Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal: 37,
  },
  caixa_botão: {
    //height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 4,
  },
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
  },
  titulo_texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  titulo_input: {
    marginLeft: 5,
    color: '#D3D3D3',
    marginTop: 20,  
  },
  caixa_input: {
    width: '100%',
    height: 45,
    borderWidth:1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection:'row',
    alignItems: 'center',
    color: '#fff',
    paddingHorizontal: 5,
    backgroundColor: '#D3D3D3',
    borderColor: '#D3D3D3',
  },
  input: {
    height: '100%',
    width: '90%',
    borderRadius: 40,
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
  texto_botao: {
    fontSize: 16,
    color: '#c76700',
    fontWeight: 'bold',
  },
});
