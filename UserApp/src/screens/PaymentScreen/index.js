import React, { useEffect, useState } from "react";
import { Image, Button, useColorScheme, Text, View, TextInput, Alert } from "react-native";
import { CardField, StripeProvider, useConfirmPayment, PaymentElement, useStripe } from '@stripe/stripe-react-native';
import styles from './styles';
import { useRoute } from "@react-navigation/native";

import axios from 'axios';

const API_URL = "http://localhost:3000";

const PaymentScreen = (props) => {
    const route = useRoute();

    const { pret, id, emailPayment } = route.params;
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loadingtwo, setLoading] = useState(false);
    // const [cardDetails, setCardDetails] = useState();
    // const { confirmPayment, loading } = useConfirmPayment();
    // const [email, setEmail] = useState();

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
            Alert.alert('Success', 'Your order is confirmed!');
        }
    };

    useEffect(() => {
        // console.log("PRETUL ", route.params)
        initializePaymentSheet();
        if (id) {
            openPaymentSheet();
        }
    }, []);

    // const handlePayPress = async () => {
    //     //1.Gather the customer's billing information (e.g., email)
    //     if (!cardDetails?.complete || !email) {
    //         Alert.alert("Please enter Complete card details and Email");
    //         return;
    //     }
    //     const billingDetails = {
    //         email: email,
    //     };
    //     //2.Fetch the intent client secret from the backend
    //     try {
    //         const { clientSecret, error } = await fetchPaymentIntentClientSecret();
    //         //2. confirm the payment
    //         if (error) {
    //             console.log("Unable to process payment");
    //         } else {
    //             const { paymentIntent, error } = await confirmPayment(clientSecret, {
    //                 type: "Card",
    //                 billingDetails: billingDetails,
    //             });
    //             if (error) {
    //                 alert(`Payment Confirmation Error ${error.message}`);
    //             } else if (paymentIntent) {
    //                 alert("Payment Successful");
    //                 console.log("Payment successful ", paymentIntent);
    //             }
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    //     //3.Confirm the payment with the card details
    // };

    return (
        <StripeProvider publishableKey="pk_test_51JzPIZA4k0mm4xmZYM4CHZVpC9qC1eZbNT1PG7uca95jZNSvJJIwTZSqpoNHpHGbi2fgMRTRYW2r5pglH3zhrDaw00dqv4RakX"
            merchantIdentifier="merchant.com.ITaxi">
            <View style={styles.container}>
                {/* <Text> This is your PaymentScreen </Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChange={value => setEmail(value.nativeEvent.text)}></TextInput>
                <CardField
                    postalCodeEnabled={true}
                    placeholder={{
                        number: "4242 4242 4242 4242",
                    }}
                    cardStyle={styles.card}
                    style={styles.cardContainer}
                    onCardChange={cardDetails => {
                        setCardDetails(cardDetails);
                    }}
                /> */}
                {/* <Button
                    onPress={handlePayPress} title="Pay" /> */}
                <Button
                    onPress={openPaymentSheet} title="Payment Sheet" />
            </View>
        </StripeProvider>

    );
};

export default PaymentScreen;
