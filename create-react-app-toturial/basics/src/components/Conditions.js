import React, { Component } from "react";

function Conditions(props){
    const age = 75;
    
    return  <div>
    {age > 12 ? <div>You are older than 12 </div> : <div>You are smaller than 12 </div>}
    {age > 50 ? <div>You are older than 50 </div> : null}
            </div>;
}


export default Conditions;
