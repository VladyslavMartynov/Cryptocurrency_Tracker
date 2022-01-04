import React, { FC } from 'react';
import { StyleSheet, Text, View } from "react-native";
import CryptoList from "../components/CryptoList/CryptoList";

const HomePage: FC = (): JSX.Element => {
    return (
        <>
            <View>
                <Text style={styles.headerSlogan}>Cryptocurrency rate</Text>
            </View>
            <View style={styles.divider}/>
            <CryptoList />
        </>
    );
};

const styles = StyleSheet.create({
    headerSlogan: {
        display: "flex",
        fontSize: 28,
        color: "white",
        backgroundColor: "black",
        fontWeight: "bold",
        padding: 10
    },
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#A9ABB1',
    }
})

export default HomePage;