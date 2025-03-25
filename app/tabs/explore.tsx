import { StyleSheet, Image, Platform, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (

      <ThemedView style={styles.container}>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Opção 1')}>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Explorar</Text>
        <TouchableOpacity style={styles.navItem} onPress={() => console.log('Opção 2')}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>


        <ThemedView style={styles.boxtop}>
          <ThemedText style={styles.titu_tex1}>Explore</ThemedText>
        </ThemedView> 
        <ThemedView style={styles.boxMid}>
          <ThemedText style={styles.titu_tex}>Explore</ThemedText>
        </ThemedView>
      </ThemedView>

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
  boxtop: {
   // backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
   backgroundColor:  '#be6704',
   height: Dimensions.get('window').height/2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  titu_tex1: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
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
});
