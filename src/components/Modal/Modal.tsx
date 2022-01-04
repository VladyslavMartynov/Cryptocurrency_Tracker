import React, { FC } from 'react';
import {observer} from "mobx-react";
import cryptoStore from "../../mobX/store/CryptoStore";
import {Image, Pressable, Text, View, Modal, StyleSheet} from "react-native";
import BuyForm from "../Form/BuyForm";

const ModalComponent: FC = observer((): JSX.Element => {
    const { isOpened, selectedCryptoCurrency: { currentImage, currentPrice } } = cryptoStore
    const toggleModal = (): void => cryptoStore.setModalVisibility(!isOpened);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpened}
            onRequestClose={() => {
                toggleModal();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPressOut={toggleModal}
                    >
                        <Text style={styles.textStyle}>X</Text>
                    </Pressable>
                    <View style={styles.cryptoContainer}>
                        <Image source={{uri: currentImage}} style={{width: 50, height: 50}}/>
                        <Text>${currentPrice}</Text>
                    </View>
                    <BuyForm/>
                </View>
            </View>
        </Modal>
    );
});

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        opacity: 0.9,
    },
    modalView: {
        width: 400,
        height: 495,
        margin: 20,
        position:"relative",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        position:"absolute",
        right: 0,
        padding: 10,
        borderTopRightRadius: 10,
        backgroundColor: "red",
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "right",
        backgroundColor:"red"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    cryptoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default ModalComponent;