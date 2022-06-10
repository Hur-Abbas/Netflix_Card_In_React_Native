import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ScrollView,Image } from "react-native";
import NetflixCard from "./src/Components/NetflixCard";

export default function App() {
  return (
    <View>
       <Image
        style={styles.imgStyle}
        source={require("../netflixCard/assets/logo.png")}
      />
      {/* <Text style={styles.Header}>Netflix Card</Text> */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <NetflixCard />
        <NetflixCard />
        <NetflixCard />
        <NetflixCard />
        <NetflixCard />
        <NetflixCard />
        <NetflixCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  imgStyle: {
    marginTop: 40,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 150,
    height: 50,
  },
});
