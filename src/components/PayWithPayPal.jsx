import React, { useState, useEffect, useRef } from "react";


function PayWithPayPal(/* props, */ {totalPrice}) {
    /* const { total} = props */
    const [ paidFor, setPaidFor ] = useState(false)
    const [ error, setError ] = useState(null)
    const paypalRef = useRef()

    useEffect(() => {
        let currentRef = paypalRef.current
        window.paypal
            .Buttons({
                createOrder: ( data, actions) => {
                    return actions.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [{
                            discription: 'Laptop store checkout',
                            amount: {
                                currecy_code: 'RUB',
                                value: `${totalPrice}.00`  /* total */
                            }
                        }]
                    })
                },
                onApprove: async (data, actions) =>{
                    const order = await actions.order.capture();
                    setPaidFor(true)
                    console.log(order);
                },
                onError: err => {
                    setError(err)
                    console.error(err);
                }
        }).render( currentRef )
        return () => currentRef.innerHTML = null;
    }, [totalPrice])

    if(paidFor){
        return (
            <div>
                Thanks for making the purchase!
            </div>
        )
    }
    if(error){
        return (
            <div>
                Error in processing payment! Please try again!
            </div>
        )
    }

    return (
        <div>            
            <div>Total - Rs. {totalPrice}</div>
            <div ref = {paypalRef}></div>
        </div>
    )
}
export default PayWithPayPal;