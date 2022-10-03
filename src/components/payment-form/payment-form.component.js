import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from "./payment-form.styles";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const amount = cartTotal;

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(response);
    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert("Payment Unsuccessful");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <Button
          disabled={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
