import React, { useState } from "react";
import { Image, Button, useColorScheme, Text, View, TextInput, Alert } from "react-native";
import { CardField, StripeProvider, useConfirmPayment, PaymentElement } from '@stripe/stripe-react-native';
import styles from './styles';
const API_URL = "http://localhost:3000";

const PaymentScreen = (props) => {
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment();
    const [email, setEmail] = useState();

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const { clientSecret, error } = await response.json();
        return { clientSecret, error };
    };

    const handlePayPress = async () => {
        //1.Gather the customer's billing information (e.g., email)
        if (!cardDetails?.complete || !email) {
            Alert.alert("Please enter Complete card details and Email");
            return;
        }
        const billingDetails = {
            email: email,
        };
        //2.Fetch the intent client secret from the backend
        try {
            const { clientSecret, error } = await fetchPaymentIntentClientSecret();
            //2. confirm the payment
            if (error) {
                console.log("Unable to process payment");
            } else {
                const { paymentIntent, error } = await confirmPayment(clientSecret, {
                    type: "Card",
                    billingDetails: billingDetails,
                });
                if (error) {
                    alert(`Payment Confirmation Error ${error.message}`);
                } else if (paymentIntent) {
                    alert("Payment Successful");
                    console.log("Payment successful ", paymentIntent);
                }
            }
        } catch (e) {
            console.log(e);
        }
        //3.Confirm the payment with the card details
    };

    return (
        <StripeProvider publishableKey="pk_test_51JzPIZA4k0mm4xmZYM4CHZVpC9qC1eZbNT1PG7uca95jZNSvJJIwTZSqpoNHpHGbi2fgMRTRYW2r5pglH3zhrDaw00dqv4RakX">
            <View style={styles.container}>
                <Text> This is your PaymentScreen </Text>
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
                />

                <Button
                    onPress={handlePayPress} title="Pay" />
            </View>
        </StripeProvider>

    );
};

export default PaymentScreen;
