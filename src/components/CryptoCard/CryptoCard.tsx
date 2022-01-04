import React, { FC } from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";
import { observer } from "mobx-react";
import cryptoStore from "../../mobX/store/CryptoStore";

const CryptoCard: FC = observer((): JSX.Element => {
    const { selectedCryptoCurrency: { Name, marketCapRank, currentImage, currentPrice }, isOpened } = cryptoStore

    const toggleModal = (): void => cryptoStore.setModalVisibility(!isOpened)

    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Image source={{uri: currentImage}} style={styles.image}/>
                </View>
                <View style={styles.info__container}>
                    <Text style={styles.name}>{Name}</Text>
                    <Text style={styles.rank}> {marketCapRank}&#9733;</Text>
                    <Text style={styles.price}>${currentPrice}</Text>
                </View>
            </View>
            <Button title={"Buy"} color={"green"} onPress={toggleModal}/>
        </View>

    );
});

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingTop: 10
    },
    image: {
        width: 100,
        height: 100,
    },
    info__container: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        alignItems: "flex-start"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 10
    },
    rank: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
        paddingBottom: 10
    },
    price: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 10
    }
})

export default CryptoCard;