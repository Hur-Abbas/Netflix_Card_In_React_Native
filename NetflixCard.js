import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-web";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.Header}>Netflix Card</Text> */}
      <View style={styles.poster}>
        <Image
          style={styles.ImgStyle}
          source={require("../../assets/moneyheist.jpg")}
        />
        <View style={styles.poster__info}>
          <Text style={styles.poster__title}>Money Heist</Text>
          <Text style={styles.poster__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not.
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.netflix.com")}
          >
            <Text style={styles.buttonTextStyle}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  poster: {
    // marginTop: 20,
    width: 330,
    borderWidth: 1,
    borderColor: "#2020207a",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  poster__info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster__text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  ImgStyle: {
    borderTopLeftRadius: 20,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    backgroundColor: "#E50914",
    color: "#fff",
    width: 120,
    height: 50,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonTextStyle: {
    textAlign: "center",
    paddingTop: 10,
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default NetflixCard;
