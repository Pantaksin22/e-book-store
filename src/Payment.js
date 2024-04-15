import React, {useState,useEffect} from 'React';
import './Payment.css'
import CheckoutProduct from "react-router-dom";
import { Link,UseHistory } from "react-router-dom";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import CurrentFormat from"react-currency-format";
import axios from './axios';
import { db } from './firebase';

function payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const history = UseHistory();
    const stripe = useStripe();
    const element = useElements();

    const [Succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing]= useState("");
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret,setCLientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => { 
            const response = await axios({
                method: 'Post',
                url: '/payments/create?total=${getBasketTotal(basket) * 100}'
           });
           setCLientSecret(response.data.clientSecret)
        }
           getClientSecret();
        },[basket])
     
        console.log('The SECRET IS >>>',clientSecret)
        console.log(' ',user)
    
    const handleSubmit = async (event) => {
    
        event.preventDefault();
        setProcessing(true);
       
        const payload = await strip.confirmCardPayment(clientSecret,{
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then(({paymentIntent }) => {
            db
            .collection('users')
            .doc(user?.id) 
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount:paymentIntent.amount,
                created: paymentIntent.created
            })
            
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    }
    return(
         <div className='Payment'>
            <div className='Payment__container'>
<div className='Payment__section'>
    </div>
    <div className='Payment__section'>
    <div className='Payment__title'>
     <h3> Delivery Address</h3>
     <div className='Payment__address'>


    <div className='Payment__section'>
    
    <div className='Payment__title'>
    <h3> Review item and Address</h3>
</div>
<div className='Payment__item'>
    {basket.map(item => (
        checkout
    )
    )}

    </div>
    console.log('The SECRET IS >>>',clientSecret)
    console.log(' ',clientSecret)

    const handleSubmit = async (event) => {
    
        event.preventDefault();
        setProcessing(true);
       
        const payload = await strip.confirmCardPayment(clientSecret,{
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then(({paymentIntent }) => {
            db
            .collection('users')
            .doc(user?.id) 
            .collection('orders')
            .doc()
            .set({
                basket: basket,
                amount:paymentIntent.amount,
                created: paymentIntent.created
            })
            
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    const handleChange= event => {
    
    </div>
            )
            </div>)
    </div>