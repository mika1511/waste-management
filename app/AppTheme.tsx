import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';


export default function AppThemeScreen() {
  return (
    <View style={styles.container}><ScrollView>
      <Text style={{fontSize: scale(18),textAlign:"left", marginLeft: scale(30), marginTop: scale(20)}}>Select A Theme For Your App:</Text>
      

      
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
    width: '80%',
  },
});
