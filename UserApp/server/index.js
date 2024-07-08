import express from "express";
import Stripe from "stripe";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());


const PUBLISHABLE_KEY = "pk_test_51JzPIZA4k0mm4xmZYM4CHZVpC9qC1eZbNT1PG7uca95jZNSvJJIwTZSqpoNHpHGbi2fgMRTRYW2r5pglH3zhrDaw00dqv4RakX";
const SECRET_KEY = "sk_test_51JzPIZA4k0mm4xmZeSPMPfNYVupmsHf2oNF4CmDrCeYTnwjYvrI96AsgAreEfKSH1kjIHR2SXT6vMeYSE1FXY0lG00CVww0y32";
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });
let PRICE;
let emailPayment;

app.listen(port, () => {
    console.log(`example app listening http://localhost:${port}`);
});

app.post('/price', (req, res) => {
    try {
        PRICE = + (req.body.pret) * 100;
        emailPayment = req.body.emailPayment
    } catch (e) {
        res.json({ error: e.message });
    }
});

app.post("/create-payment-intent", async (req, res) => {
    try {
        const customer = await stripe.customers.create();
        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2020-08-27' }
        );
        const paymentIntent = await stripe.paymentIntents.create({
            amount: PRICE,
            currency: "ron",
            customer: customer.id,
            automatic_payment_methods: {
                enabled: true,
            },
            receipt_email: emailPayment
        });

        const clientSecret = paymentIntent.client_secret;

        res.json({
            clientSecret: clientSecret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            publishableKey: PUBLISHABLE_KEY
        });
    } catch (e) {
        console.log(e.message);
        res.json({ error: e.message });
    }
});