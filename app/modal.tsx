import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';


export default function ModalScreen() {
  return (
    <View style={styles.container}><ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{fontSize: scale(25), fontWeight: "bold", marginTop: scale(60), marginLeft: scale(30)}}>Profile</Text>
      <View style={[styles.separator]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.G_Wagon}>
       <View style={styles.P_icon}></View>
       <Text style={styles.text}>{"\nNAME: "}</Text>
       <Text style={styles.text}>{"GENDER:"}</Text>
       <Text style={styles.text}>{"LOCATION: "}</Text>
       <Text style={styles.text}>{"NUMBER: "}</Text>
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
    marginVertical: scale(30),
    height: 1,
    width: '90%',
    alignSelf: "center",
    marginTop: scale(10)
  },
  P_icon: {
    height: scale(100),
    width: scale(100),
    alignSelf: "flex-start",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: scale(30),
    backgroundColor: "#84E4F7",
    marginTop: scale(7),
    marginLeft: scale(7)
  },
  G_Wagon: {
    height: scale(350),
    width: scale(290),
    alignSelf: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: scale(34),
    backgroundColor: "#D3D3D3",
  },
  text: {
    color: "black",
    fontSize: scale(16),
    fontWeight: "bold",
    marginLeft: scale(10),
    marginTop: scale(15)
  }
});
