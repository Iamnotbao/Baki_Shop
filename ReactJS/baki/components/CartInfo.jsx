import React, { useReduce } from "react";
import { Cart } from "../icon/icon";
import { useNavigate } from "react-router-dom";


const CartInfo = ({ quantity }) => {
    const navigation = useNavigate();

    function handleCLick(){
        navigation("/cartManage")
    }
    return (<>
        <div className=" cart contact_icon position-relative">
            <a onClick={handleCLick}><Cart /></a>
            <div className="cart-quantity position-absolute">{quantity}</div>
        </div>
    </>)


}
export default CartInfo;