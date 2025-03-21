import { Image, StyleSheet, Platform, TouchableOpacity, TextInput, View, Text} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import registrar from '@/app/(tabs)/registrar';
import explore from '@/app/(tabs)/explore';


type RootStackParamList = {
    registrar: undefined;
    login: undefined;
    explore: undefined;

  };

    type NavigationProp = StackNavigationProp<RootStackParamList, 'login'>;
  

export default function Login() {
        const navigation = useNavigation<NavigationProp>(); // Tipar o hook 
  return (
    <ThemedView style={styles.container}>

    <ThemedView style={styles.boxTop}>
    <Image style={styles.logo} source={require('@/assets/images/lbs2.jpg')} resizeMode='contain'></Image>
    <ThemedText style={styles.titu_tex}>LBS  -  LOKHO</ThemedText>
    <ThemedText style={styles.titu_tex}>Bem Vindo de Volta</ThemedText>
   </ThemedView>

    <ThemedView style={styles.boxMid}>
     <ThemedText style={styles.titulo_input}>ENDEREÇO DE E-MAIL</ThemedText>
    <View style={styles.Box_input}>
      <TextInput 
        style={styles.input}
      />
      <MaterialIcons 
        name='email'
        size={20}
        color={'#808080'}
      />
    </View>

      <ThemedText style={styles.titulo_input}>SENHA</ThemedText>
      <View style={styles.Box_input}>
      <TextInput 
        style={styles.input}
      />
      <MaterialIcons 
        name='remove-red-eye'
        size={20}
        color={'#808080'}
      />
    </View>
    
       <View style={styles.boxBottom}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('explore')}>
          <Text style={styles.texto_botao}>Entrar</Text>
        </TouchableOpacity>
       </View>
      
      <ThemedView style={styles.linhabranca}>
          <Text style={styles.palavralinha}>OU</Text>
      </ThemedView>
      
          <View style={styles.boxBottom1}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('registrar')}>
                <Text style={styles.texto_botao1}>Inscrever-se gratuitamente</Text>
              </TouchableOpacity>
          </View>
      
   

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
    backgroundColor: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
    //height: Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal: 37,
  },
  boxBottom: {
    //height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 4,
  },
  boxBottom1: {
    //height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 3,
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
    height: 1, 
    backgroundColor: '#fff',
    marginTop: 30,
    flexGrow: 3,
  },
  palavralinha: {
    position: 'absolute',
    top: -16,
    left: '65%',
    transform: 'translateX(-50%)',
    backgroundColor: '#000',
    borderRadius: 40,
    padding:   10, 
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
