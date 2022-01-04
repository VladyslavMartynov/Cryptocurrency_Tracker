import React, { FC } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import cryptoStore from "../../mobX/store/CryptoStore";
import { observer } from "mobx-react";


interface IFormValues {
    email: string;
    firstName: string;
    lastName: string;
    userPhone: string;
}

interface IValidationOptions {
    firstName: string;
    lastName: string;
    userPhone: string;
}

const BuyForm: FC = observer((): JSX.Element => {

    const {  isOpened  } = cryptoStore

    const toggleModal = (): void => cryptoStore.setModalVisibility(!isOpened);

    const FormValuesRules: IValidationOptions = {
        firstName: "^[\\w'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$",
        lastName: "^[\\w'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$",
        userPhone: "^(?:\\+38)?(0\\d{9})$",
    };

    const defaultFormValues: IFormValues = {
        email: '',
        firstName: '',
        lastName: '',
        userPhone: '',
    }

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Enter valid email!')
            .required('This field is required!'),
        firstName: yup
            .string()
            .required('This field is required!')
            .matches(
                new RegExp(FormValuesRules.firstName),
                'Please enter valid firstName!'
            ),
        lastName: yup
            .string()
            .required('This field is required!')
            .matches(
                new RegExp(FormValuesRules.lastName),
                'Please enter valid lastName!'
            ),
        userPhone: yup
            .string()
            .required('This field is required!')
            .matches(
                new RegExp(FormValuesRules.userPhone),
                'Please enter valid phoneNumber!'
            )
    })

    const handleSubmit = (values: IFormValues) => {
        console.log(values)
        toggleModal()
    }


    return (
        <Formik
            initialValues={defaultFormValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                handleSubmit(values)
                resetForm({ values: defaultFormValues})
            } }
        >
            {(
                { handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                    dirty
                }) => (
                <View style={styles.form__container}>
                    <View style={styles.form__box}>
                        <Text style={styles.form__label}>Name</Text>
                        <TextInput
                            style={styles.form__input}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                        />
                        {touched.firstName && errors.firstName && (
                            <Text style={styles.form__error}>{errors.firstName}</Text>
                        )}
                    </View>
                    <View style={styles.form__box}>
                        <Text style={styles.form__label}>LastName</Text>
                        <TextInput
                            style={styles.form__input}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                        />
                        {touched.lastName && errors.lastName && (
                            <Text style={styles.form__error}>{errors.lastName}</Text>
                        )}
                    </View>
                    <View style={styles.form__box}>
                        <Text style={styles.form__label}>Email</Text>
                        <TextInput
                            style={styles.form__input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.form__error}>{errors.email}</Text>
                        )}
                    </View>
                    <View style={styles.form__box}>
                        <Text style={styles.form__label}>Your phone</Text>
                        <TextInput
                            style={styles.form__input}
                            onChangeText={handleChange('userPhone')}
                            onBlur={handleBlur('userPhone')}
                            value={values.userPhone}
                        />
                        {touched.userPhone && errors.userPhone && (
                            <Text style={styles.form__error}>{errors.userPhone}</Text>
                        )}
                    </View>
                    <Button color={errors? "black" : "green"} disabled={!isValid && !dirty} onPress={handleSubmit} title="Submit payment" />
                </View>
            )}
        </Formik>
    );
});

const styles = StyleSheet.create({
    form__container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    form__label: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        color: "black"
    },
    form__box: {
        marginBottom:10
    },
    form__input: {
        width: 300,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 10,
    },
    form__error: {
        color: 'red',
        textAlign: "left",
        marginLeft: 10
    }
})

export default BuyForm;