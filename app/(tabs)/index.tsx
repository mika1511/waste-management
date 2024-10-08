import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { scale, verticalScale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ display: "flex", flex: 1 }}
      >
        <Text
          style={[
            styles.title,
            {
              marginVertical: scale(10),
              color: "black",
            },
          ]}
        >
          Advertisement
        </Text>
        <View style={[styles.adv_box, styles.shadow]}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
            source={require("../../assets/images/Green.jpg")}
          />
        </View>
      <Text style={[styles.title,{color: "black",}]}>{"\nServices"}</Text>

        <View
          style={{
            marginTop: scale(10),
            flexDirection: "row",
            gap: scale(30),
            justifyContent: "space-around",
            backgroundColor: "#ede9e9",
          }}
        >
          <Link href={"/Track"} >
          <View style={[styles.services_box, styles.shadow]}>
          
            <View
              style={{
                height: scale(70),
                width: scale(75),
                borderTopLeftRadius: scale(12),
                borderTopRightRadius: scale(12),
                backgroundColor: "#2aa8a0",
              }}
            >
              <Image
                style={{
                  width: scale(100),
                  height: scale(100),
                  alignSelf: "center",
                  marginVertical: scale(-15),
                }}
                source={require("../../assets/images/base_icon.png")}
              />
             
            </View>
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "flex-end",
                fontSize: scale(13),
                fontWeight: "bold",
                color: "black",
              }}
            >
              TRACK
            </Text>
          </View>
          </Link>
          <Link href={"/Scan"}>
          <View style={[styles.services_box, styles.shadow]}>
            <View
              style={{
                height: scale(70),
                width: scale(75),
                borderTopLeftRadius: scale(12),
                borderTopRightRadius: scale(12),
                backgroundColor: "#ff8989",
              }}
            >
              <Image
                style={{
                  width: scale(50),
                  height: scale(50),
                  alignSelf: "center",
                  marginVertical: scale(10),
                }}
                source={require("../../assets/images/qrcode.png")}
              />
            </View>
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "flex-end",
                fontSize: scale(13),
                fontWeight: "bold",
                color: "black",
              }}
            >
              SCAN
            </Text>
          </View>
          </Link>
          <View style={[styles.services_box, styles.shadow]}>
            <View
              style={{
                height: scale(70),
                width: scale(75),
                borderTopLeftRadius: scale(12),
                borderTopRightRadius: scale(12),
                backgroundColor: "#ffea61",
              }}
            >
              <Image
                style={{
                  width: scale(50),
                  height: scale(50),
                  alignSelf: "center",
                  marginVertical: scale(10),
                }}
                source={require("../../assets/images/person_icon.png")}
              />
            </View>
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "flex-end",
                fontSize: scale(12),
                fontWeight: "bold",
                color: "black",
              }}
            >
              COMPLAINT
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ede9e9",
  },
  title: {
    alignSelf: "flex-start",
    //marginLeft: scale(30),
    verticalAlign: "top",
    fontSize: scale(20),
    fontWeight: "bold",
  },
  adv_box: {
    // justifyContent: "center",
    marginVertical: scale(5),
    height: scale(130),
    width: scale(290),
    backgroundColor: "#fffbfa",
    borderRadius: scale(11),
  },
  separator: {
    marginVertical: scale(30),
    height: 1,
    width: "80%",
  },
  services_box: {
    height: scale(95),
    width: scale(75),
    backgroundColor: "#fffbfa",
    borderRadius: scale(12),
  },
  shadow: {
    shadowOffset: { width: scale(4), height: verticalScale(4) },
    shadowColor: "#grey",
    shadowOpacity: scale(70),
    shadowRadius: scale(2),
    elevation: scale(11),
  },
});
