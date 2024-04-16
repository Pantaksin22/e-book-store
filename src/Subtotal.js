import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {UseStatValue} from "/StateProvider";
import {getBasketTotal } from "./reducer";

function Subtotal(){
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className="Subtotal">
            <currencyFormat
            renderText={(value)} => (
                <>
                <p>
                {/* Part of the homework */}
                Subtotal ({basket.lenght} item) : <strong>{value}</strong>
                </p>
                <small className="Subtotal__gift">
                   <input type="checkbox" /> This order contain a gift
                   </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} //
            displayType={"text"}
            thousandSeparate={true}
            profix={"s"}
        </div>
    )
}