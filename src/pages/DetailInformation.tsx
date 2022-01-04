import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/constants";
import ModalComponent from "../components/Modal/Modal";
import CryptoCard from "../components/CryptoCard/CryptoCard";

const DetailInformation: FC = (): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handleBackHome = (): void => {
        navigation.popToTop()
    }

  return (
      <View>
          <View style={styles.container}>
              <Text style={styles.headerSlogan}>Detail Information</Text>
              <Pressable onPress={handleBackHome}>
                  <Text style={styles.button}>Back</Text>
              </Pressable>
          </View>
          <CryptoCard/>
          <ModalComponent/>
      </View>
      );
};

const styles = StyleSheet.create({
    headerSlogan: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "black",
        padding: 10
    },
    button: {
        backgroundColor: "white",
        padding: 5,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 4
    }
})

export default DetailInformation;