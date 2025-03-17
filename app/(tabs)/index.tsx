import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  return (
    <ThemedView style={styles.container}>

    <ThemedView style={styles.boxTop}>
    <Image style={styles.logo} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
    <ThemedText style={styles.titu_tex}>LBS  -  LOKHO</ThemedText>
    <ThemedText style={styles.titu_tex}>Bem Vindo de Volta</ThemedText>
   </ThemedView>

    <ThemedView style={styles.boxMid}>
     <ThemedText style={styles.titulo_input}>ENDEREÇO DE E-MAIL</ThemedText>
    <view style={styles.Box_input}>
      <TextInput 
        style={styles.input}
      />
      <MaterialIcons 
        name='email'
        size={20}
        color={'#808080'}
      />
    </view>

      <ThemedText style={styles.titulo_input}>SENHA</ThemedText>
      <view style={styles.Box_input}>
      <TextInput 
        style={styles.input}
      />
      <MaterialIcons 
        name='remove-red-eye'
        size={20}
        color={'#808080'}
      />
    </view>
    
       <view style={styles.boxBottom}>
        <TouchableOpacity style={styles.button}>
          <text style={styles.texto_botao}>Entrar</text>
        </TouchableOpacity>

      <ThemedView style={styles.linhabranca}>
          <text style={styles.palavralinha}>OU</text>
          <view style={styles.boxBottom1}>
              <TouchableOpacity style={styles.button}>
                <text style={styles.texto_botao1}>Inscrever-se gratuitamente</text>
              </TouchableOpacity>
          </view>
      </ThemedView>
    </view>

    </ThemedView>


 </ThemedView>

  );}

const styles = StyleSheet.create({
  boxTop: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMid: {
    backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
    //height: Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal: 37,
  },
  boxBottom: {
    height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
  },
  boxBottom1: {
    height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 3,
  },
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
    alignItems: 'center',
    justifyContent: 'center',
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
  titulo_input: {
    marginLeft: 5,
    color: '#D3D3D3',
    marginTop: 20,  
  },
  Box_input: {
    width: '100%',
    height: 40,
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
  button: {
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
  texto_botao1:{
    fontSize: 16,
    color: '#9A2401',
    fontWeight: 'bold',
  },
  linhabranca: {
    position: 'relative',
    width: '90%',
    height: 3, /* Espessura da linha */
    backgroundColor: '#fff',
    marginTop: 30,
    flexGrow: 1,
  },
  palavralinha: {
    position: 'absolute',
    top: -16, /* Ajuste a posição do texto em relação à linha */
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#000',
    borderRadius: 40,
    padding:   10, /* Espaçamento em torno da palavra */
    fontSize: 10, /* Tamanho da fonte */
    fontWeight: 'bold',
    color: '#fff', 
  },
});
