import React, {useState,useEffect} from 'react';
import './Payment.css'
import { useStatvalue } from "./StateProvider";
import CheckoutProduct from "react-router-dom";
import { Link,UseHistory } from "react-router-dom";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import CurrentFormat from"react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const history = UseHistory();
    const stripe = useStripe();
    const element = useElements();


    const [succeeded,setSucceeded] = useState(false);
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
    }
        const handleChange = event=> {
            setDisabled(event.empty);
            setError(event.error? event.error.message :"");
        }
      
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
                <h1> Checkout(<Link to="/checkout">{basket?.lenght}
                items</Link>)
                </h1>
                

    <div className='Payment__section'>
    <div className='Payment__title'>
     <h3> Delivery Address</h3>
     </div>
     <div className='Payment__address'>
        <p>{user?.email}</p>
        <p>123 React Lane</p>
        <p>Los Angeles</p>

     </div>
     </div>

    <div className='Payment__section'>
        <div className='Payment__title'>
    <h3> Review item and Address</h3>
</div>
<div className='Payment__item'>
    {basket.map(item => (
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        />
    )
    )}

    </div>

    </div>
    <div className='payment__section'>
    <div className='Payment__title'>
        <h3>Payment Method</h3>
</div>
<div className='payment__details'>
<form onSubmit={handleSubmit}>
<CardElement onChange={handleChange}/>
<div classname="payment__priceContainer">
<currencyFormat
 renderText={(value)) => (
    <h3>Order Total: (value)</h3>
 )}
 decimalScale={2}
 value={getBasketTotal(basket))}
 displayType={"Text"}
 thousandSeparator={true}
 prefix={"s"} />
 <button disabled={processing || disabled || Succeeded}>
    <span>{processing ? <p>Processing</p> :"Buy Now"} </span}
    {/button}
</div>
</form>
</div>
</div>
<div>
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