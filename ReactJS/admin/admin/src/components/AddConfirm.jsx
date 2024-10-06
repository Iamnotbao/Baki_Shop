import React from "react";

const AddConFirm = ({ message, onClose })=>{
    return (
        <>
            <div className="confirmation_add" style={{
                    position:"fixed",
                    width:"100%",
                    height:"100%",
                    top:0,
                    left:0,
                    alignItems:"center",
                    display:"flex",
                    justifyContent: "center",
                    zIndex:"1000"


            }}>
                <div className="popup_add"
                style={{
                    background: "linear-gradient(#e66465, #9198e5)",
                    opacity:0.6,
                    padding:"5px",
                    width:"400px",
                    height:"200px",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:"50px",
                    
                }}>
                    <p style={{fontSize:"20px",
                                color:"blue"
                    }}>{message}</p>
                    <button onClick={onClose} style={{
                        borderRadius:"10px",
                        color:"black",
                        fontSize:"17px",
                        width:"80px",
                        padding:"5px",
                        background: "rgb(63,94,251)"}}>OK</button>
                </div>
                <div className="popup_overlay" onClick={onClose} 
                style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    width:"100%",
                    height:"100%",
                    background:"rgba(0,0,0,0.3)",
                    zIndex:-1
                }}>
                </div>

            </div>
        </>
    )
}
export default AddConFirm