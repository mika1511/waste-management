import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Text, View, } from '../components/Themed';

import ImagePicker, { ImageLibraryOptions, ImagePickerResponse } from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import React,{useCallback, useState} from "react";
import { ImageURISource } from 'react-native';
import { DocumentPickerOptions } from 'react-native-document-picker';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { ScreenStackHeaderLeftView } from 'react-native-screens';


interface AppState {
  image: string | null;
}

export default function ModalScreen() {


  const [fileResponse, setFileResponse] = useState([]);

  // const handleDocumentSelection = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: 'fullScreen',
  //     });
  //     setFileResponse(response);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }, []);

  
    const [image, setImage] = useState<string | null>(null);

  const handleImagePicked = (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User canceled image picker');
    } else if (response.errorCode) {
      console.log('Image picker error: ', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      setImage(response.assets[0].uri || null);
    }
  };

  const pickImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo', // You can specify the media type you want to pick (photo, video, or mixed).
      quality: 1, // Specify the image quality (0 to 1).
    };

    ImagePicker.launchImageLibrary(options, handleImagePicked);
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: scale(25), fontWeight: "bold", marginTop: scale(60), marginLeft: scale(30)}}>Profile</Text>
      <View style={[styles.separator]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.G_Wagon}>
       <View style={styles.P_icon}><Button title="Pick Image" onPress={() => pickImage()} /></View>
       <Text style={styles.text}>{"\nNAME: "}</Text>
       <Text style={styles.text}>{"GENDER:"}</Text>
       <Text style={styles.text}>{"LOCATION: "}</Text>
       <Text style={styles.text}>{"NUMBER: "}</Text> 
      </View>
     <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
