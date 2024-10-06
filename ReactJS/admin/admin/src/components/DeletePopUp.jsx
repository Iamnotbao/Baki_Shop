import React from "react";

function DeletePopUp({ handleDeleteTrue, handleCancel }) {
  return (
    <div style={{ width: "100%", height: "100%", position: "fixed",top:"5%", backgroundColor:"black",opacity:"0.8"}} className="d-flex justify-content-center align-items-center ">
      <div style={{ width: "300px", height: "200px",border:"1px solid black", backgroundColor:"red", borderRadius:"10px", color:"white"}} className="d-flex flex-column justify-content-center align-items-center column-gap-50">
        <p>Do you want to delete</p>
        <div className="d-flex flex-row align-item justify-content-between gap-10 " style={{marginTop:"40px"}}>
        <button style={{border:"1px solid black", backgroundColor:"#000000", opacity:0.8, borderRadius:"10px", padding:"5px", color:"white"}} onClick={handleDeleteTrue}>Delete</button>
        <button style={{border:"1px solid black", backgroundColor:"#000000", opacity:0.8, borderRadius:"10px", padding:"5px", color:"white"}} onClick={handleCancel}>Cancel</button>
        </div>
      
      </div>

    </div>
  );
}

export default DeletePopUp;
