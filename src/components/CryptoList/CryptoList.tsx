import React, { FC, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    View,
    ListRenderItem,
} from "react-native";
import { observer } from "mobx-react";
import cryptoStore from "../../mobX/store/CryptoStore";
import { ICryptoCurrency } from "../../mobX/store/types/types";
import CryptoItem from "../CryptoItem/CryptoItem";


const CryptoList: FC = observer((): JSX.Element => {
    const { cryptoItems, apiParams: { currentPage } } = cryptoStore

    useEffect(() => {
        cryptoStore.fetchCryptoCurrencies()
    },[])

    const displaySpinner = (): JSX.Element => {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    const handleChangePage = (): void => {
        cryptoStore.setCurrentPage(currentPage + 1)
        cryptoStore.fetchCryptoCurrencies()
    }


    const renderItem: ListRenderItem<ICryptoCurrency> = ({item}) => {
        return <CryptoItem item={item}/>
    }

    return (
            <FlatList
                data={cryptoItems}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleChangePage}
                onEndReachedThreshold={0.9}
                ListFooterComponent={displaySpinner}
                renderItem={renderItem}
            />
    );
});


export default CryptoList;