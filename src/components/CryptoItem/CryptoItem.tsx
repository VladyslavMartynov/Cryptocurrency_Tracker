import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/core'
import { observer } from "mobx-react";
import cryptoStore from "../../mobX/store/CryptoStore";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ICryptoCurrency } from "../../mobX/store/types/types";
import { RootStackParamList } from "../../constants/constants";

interface ICryptoItemProps {
    item: ICryptoCurrency,
}

const CryptoItem: FC<ICryptoItemProps> = observer((
    {
        item: {
            name,
            image ,
            current_price,
            symbol,
            price_change_percentage_7d_in_currency,
            market_cap_rank
        },
    }
): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const selectCryptoCurrency = (): void => {
        cryptoStore.setSelectedCryptoCurrency(name,market_cap_rank, image, current_price)
    }

    const handleEvents = (): void => {
        selectCryptoCurrency()
        navigation.navigate('DetailInformation')
    }

    const priceChangeColor = price_change_percentage_7d_in_currency > 0 ? '#34C759' : '#FF3B30';

    return (
        <TouchableOpacity onPress={handleEvents}>
            <View style={styles.crypto__wrapper}>
                <View style={styles.crypto__leftWrapper}>
                    <Image source={{uri: image}} style={styles.crypto__image}/>
                    <View style={styles.crypto__titlesWrapper}>
                        <Text style={styles.crypto__title}>{name}</Text>
                        <Text style={styles.crypto__subtitle}>{symbol}</Text>
                    </View>
                </View>
                <View style={styles.crypto__rightWrapper}>
                    <Text style={styles.crypto__title}>${current_price.toLocaleString('en-us', { currency: 'USD'})}</Text>
                    <Text style={[styles.crypto__subtitle, {color: priceChangeColor}]}>{price_change_percentage_7d_in_currency.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
});


const styles = StyleSheet.create({
    crypto__wrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    crypto__leftWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    crypto__rightWrapper: {
        alignItems: 'flex-end',
    },
    crypto__titlesWrapper: {
        marginLeft: 8,
    },
    crypto__title: {
        fontSize: 18,
    },
    crypto__subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1",
    },
    crypto__image: {
        width: 48,
        height: 48,
    }
})

export default CryptoItem;