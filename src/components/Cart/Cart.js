import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let total = 0;
     for(let i = 0; i<cart.length; i++){
        const prd = cart[i];
        total = total + prd.price * prd.quantity;
        debugger;
     }
     let shipping = 0;
     if(total > 35){
        shipping = 0;
     }
     else if(total > 15){
         shipping = 4.99;
     }
     else if(total > 0){
         shipping = 12.00;
     }
     const tax = (total / 10).toFixed(2);
     const grandTotal  = (total + shipping + Number(tax)).toFixed(2);

     const formatNumber = (num) =>{
         const precision = num.toFixed(0);
         return Number(precision);
     }
    return (
        <div>
            <h4 className="text-danger">Order summary</h4>
            <p><small>Items Ordered: {cart.length} </small></p>
            <p><small>Product Price: {formatNumber(total)}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p><small>Total Price: {grandTotal} </small></p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;