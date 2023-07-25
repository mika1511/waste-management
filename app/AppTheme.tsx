import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Switch } from 'react-native';
import { scale } from 'react-native-size-matters';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheetProperties } from 'react-native';



export default function AppThemeScreen() {
  return (
    <View style={styles.container}><ScrollView>
      <Text style={[styles.text,{ top: scale(40)}]}>Select A Theme For Your App:</Text>
      <View  style={styles.box}>
        <View style={styles.inner_box}>
        <Text style={styles.text}>Dark Theme                    </Text>
        <Switch style={{marginTop: scale(6)}}></Switch>
        </View>
        <View style={[styles.separator]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.inner_box}>
        <Text style={styles.text}>Light Theme                   </Text>
        <Switch style={{marginTop: scale(6)}}></Switch>
        </View>
      </View>

      
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
    height: 1,
    width: '95%',
    alignSelf: "center",
    marginVertical: scale(2),
    marginTop: scale(10),
    
  },
  text: {
    fontSize: scale(18),
    textAlign:"left", 
    marginLeft: scale(30), 
    marginTop: scale(18),
    bottom: scale(4)
    
  },
  box: {
    height: scale(110),
    width: scale(290),
    alignSelf: "center",
    borderColor: "grey",
    borderWidth: 1,
    marginTop: scale(50),
    borderRadius: scale(11), 
  },
  inner_box: {
    borderRadius:scale(11),
    height: "40%",
    flexDirection: "row"
  }
});
