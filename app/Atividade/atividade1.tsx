import { Image, StyleSheet, Platform, TouchableOpacity, View, ViewStyle  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState} from 'react';


export default function Login() {

       const [progress, setProgress] = useState(0);
  
        const handlePress = () => {
          if (progress < 3) {
            setProgress(progress + 1);
          }
        };

  return (
    <ThemedView style={styles.container}>

        <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, 
          { 
            backgroundColor: progress >= 3 ? 'blue' : 'blue',
            width: `${progress * 33.33}%`,
            } as ViewStyle, 
          ]} 
          />
        </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>


         <View style={styles.containeractiv}>
         <View style={styles.box} 
         
         />
         <View style={styles.box} 
         
         />
         </View>

    </ThemedView>

  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom,rgb(190, 103, 4) 0%,rgb(48, 27, 1) 51%)',
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
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 30,
  },
  progressBarContainer: {
    width: '70%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginLeft: 70,
  },
  progressBar: {
    height: '100%',
  },
  containeractiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
