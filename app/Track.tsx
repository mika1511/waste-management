import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import WebView from 'react-native-webview';


export default function NavigationPage() {
  return (
    <View style={styles.container}>
      <View style={{
        width: "100%",
        height: "105%",
      }}>
        <WebView
   source={{html: '<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=81.33592844009401%2C21.19126420956745%2C81.34783744812013%2C21.19682596230095&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=17/21.19405/81.34188%22%3EView Larger Map</a></small>'}}
   style={{marginTop: 20}}
/>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "grey",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
