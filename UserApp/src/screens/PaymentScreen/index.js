import React, { useEffect, useState } from "react";
import { Image, Button, useColorScheme, Text, View, TextInput, Alert } from "react-native";
import { CardField, StripeProvider, useConfirmPayment, PaymentElement, useStripe } from '@stripe/stripe-react-native';
import styles from './styles';
import { useRoute, useNavigation } from "@react-navigation/native";

import axios from 'axios';

const API_URL = "http://localhost:3000";

const PaymentScreen = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const { pret, id, emailPayment } = route.params;
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loadingtwo, setLoading] = useState(false);

    const fetchPaymentIntentClientSecret = async () => {
        axios
            .post(`${API_URL}/price`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }, pret, emailPayment
            })
            .then()
            .catch(err => {
                console.error(err);
            });

        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const { clientSecret, error, ephemeralKey, customer } = await response.json();
        return { clientSecret, error, ephemeralKey, customer };
    };

    const initializePaymentSheet = async () => {
        const {
            clientSecret,
            ephemeralKey,
            customer,
            publishableKey,
        } = await fetchPaymentIntentClientSecret();

        const { error } = await initPaymentSheet({
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: clientSecret,
            allowsDelayedPaymentMethods: true,
        });
        if (!error) {
            setLoading(true);
        }
    };

    const openPaymentSheet = async () => {

        const {
            clientSecret,
            ephemeralKey,
            customer,
            publishableKey,
        } = await fetchPaymentIntentClientSecret();

        const { error } = await presentPaymentSheet({ clientSecret });

        if (error) {
            Alert.alert(`Eroare: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Comandă confirmată');
            navigation.navigate("OrderPage", { id });
        }
    };

    useEffect(() => {
        initializePaymentSheet();
        if (id) {
            openPaymentSheet();
        }
    }, []);

    return (
        <StripeProvider publishableKey="pk_test_51JzPIZA4k0mm4xmZYM4CHZVpC9qC1eZbNT1PG7uca95jZNSvJJIwTZSqpoNHpHGbi2fgMRTRYW2r5pglH3zhrDaw00dqv4RakX"
            merchantIdentifier="merchant.com.ITaxi">
            <View style={styles.container}>
                <Button
                    onPress={openPaymentSheet} title="Plata cu cardul în derulare" />
            </View>
        </StripeProvider>
    );
};

export default PaymentScreen;
