// import React, { useEffect, useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// const StripeCheckout = ({ amount }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     axios
//       .post("http://localhost:5000/api/payment/create-payment-intent", {
//         amount: amount * 100, // USD to cents
//       })
//       .then((res) => {
//         setClientSecret(res.data.clientSecret);
//       });
//   }, [amount]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const card = elements.getElement(CardElement);

//     const { paymentIntent, error } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: card,
//         },
//       }
//     );

//     if (error) {
//       console.error(error.message);
//     } else {
//       if (paymentIntent.status === "succeeded") {
//         alert("Payment Successful!");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>

// );
// };

// export default StripeCheckout;

// import React, { useEffect, useState } from "react";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";

// const stripePromise = loadStripe("pk_test_********************"); // তোমার Stripe public key বসাও

// const StripePayment = () => {
//   const [clientSecret, setClientSecret] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();
//   const amount = 10; // USD

//   useEffect(() => {
//     // Backend থেকে clientSecret আনা
//     axios
//       .post("http://localhost:5000/api/payment/create-payment-intent", {
//         amount: amount * 100,
//       })
//       .then((res) => {
//         setClientSecret(res.data.clientSecret);
//       });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const card = elements.getElement(CardElement);
//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: card,
//         },
//       }
//     );

//     if (error) {
//       console.error("❌ Payment failed:", error.message);
//       alert("❌ " + error.message);
//     } else if (paymentIntent.status === "succeeded") {
//       alert("✅ Payment successful!");
//     }
//   };

//   // Form টুকু Elements context এর ভিতরে থাকতে হবে
//   const StripePayment= () => (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-5">
//       <CardElement className="border p-3 rounded" />
//       <button
//         type="submit"
//         disabled={!stripe}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//       >
//         Pay ${amount}
//       </button>
//     </form>
//   );

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-center mb-4">Stripe Payment</h2>
//       <Elements stripe={stripePromise}>
//        <StripePayment></StripePayment>
//       </Elements>
//     </div>
//   );
// };

// export default StripePayment;

import React, { useContext, useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useAxiosPublic from "../Utility/axiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

// Stripe public test key
const stripePromise = loadStripe(
  "pk_test_51Rq6x6AqAHOlLL4z2sj3SZnaggxZajgn3kmiBXlTpaedwSnXLBL0JlG9kr6PKdh7IwGkwjYfC9MuazIszrAoscni00V2bcpOqJ"
);

// 👉 Checkout form inside the component
const StripeForm = ({ amount, handleRequest }) => {
  const { user } = useContext(AuthContext);
  console.log("🚀 ~ StripeForm ~ user:", user);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const axios = useAxiosPublic();

  useEffect(() => {
    if (amount > 0)
      axios
        .post("/create-payment-intent", {
          amount: amount,
          user: {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          },
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.error("Error creating PaymentIntent:", err);
        });
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
        },
      }
    );

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Payment failed",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (paymentIntent.status === "succeeded") {
      handleRequest();

      Swal.fire({
        title: "Payment successful!",
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <CardElement className="border p-3 rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Request
      </button>
    </form>
  );
};

// ✅ Main wrapper with <Elements> and StripeForm inside one component
const StripePayment = ({ amount, handleRequest }) => {
  // you can pass this as prop too

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Stripe Payment</h2>
      <Elements stripe={stripePromise}>
        <StripeForm handleRequest={handleRequest} amount={amount} />
      </Elements>
    </div>
  );
};

export default StripePayment;
