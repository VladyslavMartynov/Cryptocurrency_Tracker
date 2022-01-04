import React, { FC } from 'react';
import { View, Text, StyleSheet} from "react-native";

const NavBar: FC = (): JSX.Element => {
    return (
        <View style={styles.category__wrapper}>
            <Text style={styles.category__coin}>Coin</Text>
            <Text style={styles.category__price}>Price</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    category__wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        shadowColor: "grey",
        borderWidth: 1,
        borderColor: "grey",
    },
    category__coin: {
        fontSize: 18,
        fontWeight: "bold"
    },
    category__price: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default NavBar;