import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import WebView from "react-native-webview";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, useColorScheme } from "react-native";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: scale(30),
            alignSelf: "flex-start",

            marginLeft: scale(20),
          }}
        >
          {"My\n"}
        </Text>


        <Link href={"/modal"}>
          <View style={{
            width: "auto",
            height: "auto",
            display : "flex",
          }}>
          <View
            style={[
              styles.cont_,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <Text style={styles.title}>Profile</Text>
            {/* <View style={{height: scale(30),width: "50%",backgroundColor:"grey"}}></View> */}
            <FontAwesome
              name="user-o"
              size={20}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginTop: scale(3), marginRight: scale(40) }}
            />
          </View>
          </View>
        </Link>

        <View
          style={[styles.separator, { marginTop: 10 }]}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <Link href={"/LanguagePage"}>
          <View style={styles.cont_}>
            <Text style={styles.title}>Language Setting</Text>
          </View>
        </Link>

        <View
          style={[styles.separator, { marginTop: 10 }]}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <View style={styles.cont_}>
          <Text style={styles.title}>App Theme</Text>
        </View>
        <View
          style={[styles.separator, { marginTop: 10 }]}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
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
    fontWeight: "bold",
    marginLeft: scale(40),
    //marginTop: scale(10)
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "90%",
    alignSelf: "center",
  },
  cont_: {
    height: scale(40),
    width: "100%",
    justifyContent: "center",
    backgroundColor: "grey"
  },
});
