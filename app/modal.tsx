import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';


export default function ModalScreen() {
  return (
    <View style={styles.container}><ScrollView>
      <Text style={{fontSize: scale(25), fontWeight: "bold", marginTop: scale(60), marginLeft: scale(30)}}>Profile</Text>
      <View style={[styles.separator]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      

     
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: scale(30),
    height: 1,
    width: '90%',
    alignSelf: "center",
    marginTop: scale(10)
  },
});
