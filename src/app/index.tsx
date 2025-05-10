import { Image, StyleSheet, Platform, TouchableOpacity, TextInput, View, Text, Alert} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import registrar from '@/src/app/registrar';
import explore from '@/src/app/tabs/explore';
import { Link, router } from 'expo-router';
import React, {useState} from 'react';
import { auth } from '../database/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function index() {
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("")



      const fazer_login = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
          Alert.alert("Email inválido");
          return;
        }
      
        try {
          // Tenta logar com email e senha
          await signInWithEmailAndPassword(auth, email, senha);
          
          // Se chegar aqui, o login funcionou
          Alert.alert("Login realizado com sucesso!");
          router.push("/tabs/explore");
          
        } catch (error) {
          // Se o login falhar, mostra erro
          Alert.alert("Falha no login", "Email ou senha incorretos.");
        }
      };



        function vá_para_explore(){
            router.push("/tabs/explore")
        }
        function vá_para_registrar(){
            router.push("/registrar")
        }

        //const [password, setPassword] = useState<string>('');

  return (
    <ThemedView style={styles.container}>

    <ThemedView style={styles.Topo_da_caixa}>
    <Image style={styles.logo} source={require('@/assets/images/lbs.png')} resizeMode='contain'></Image>
    <ThemedText style={styles.titulo_texto}>LBS  -  LOKHO</ThemedText>
    <ThemedText style={styles.titulo_texto}>Bem Vindo de Volta</ThemedText>
   </ThemedView>

    <ThemedView style={styles.Meio_da_caixa}>
     <ThemedText style={styles.titulo_do_input}>ENDEREÇO DE E-MAIL</ThemedText>
    <View style={styles.caixa_do_input}>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <MaterialIcons 
        name='email'
        size={20}
        color={'#808080'}
      />
    </View>

      <ThemedText style={styles.titulo_do_input}>SENHA</ThemedText>
      <View style={styles.caixa_do_input}>
      <TextInput 
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <MaterialIcons 
        name='remove-red-eye'
        size={20}
        color={'#808080'}
      />
    </View>
    
       <View style={styles.caixa_botão}>
        <TouchableOpacity style={styles.botão} onPress={fazer_login} >
          <Text style={styles.texto_botão}>Entrar</Text>
        </TouchableOpacity>
       </View>
      
      <ThemedView style={styles.linhabranca}>
          <Text style={styles.palavralinha}>OU</Text>
      </ThemedView>
      
          <View style={styles.caixa_botão1}>
              <TouchableOpacity style={styles.botão} onPress={vá_para_registrar}>
                <Text style={styles.texto_botão1}>Inscrever-se gratuitamente</Text>
              </TouchableOpacity>
          </View>
      
    </ThemedView>

 </ThemedView>

  );}

const styles = StyleSheet.create({
  Topo_da_caixa: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Meio_da_caixa: {
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
  caixa_botão1: {
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
    height: 100,
    width: 80,
  },
  titulo_texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  titulo_do_input: {
    marginLeft: 5,
    color: '#D3D3D3',
    marginTop: 20,  
  },
  caixa_do_input: {
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
  texto_botão: {
    fontSize: 16,
    color: '#c76700',
    fontWeight: 'bold',
  },
  texto_botão1:{
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
