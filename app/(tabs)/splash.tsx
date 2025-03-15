import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function splash() {
  return (
    <ThemedView style={styles.container}>
    <Image style={styles.logo} source={require('@/assets/images/lbs2.jpg')}></Image>
    <ThemedText style={styles.titu_tex}>LBS  -  LOKHO</ThemedText>
    </ThemedView>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 170,
    width: 170,
  },
  titu_tex: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,

  }
});
