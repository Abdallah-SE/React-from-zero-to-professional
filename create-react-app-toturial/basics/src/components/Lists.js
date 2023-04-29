import React, { Component } from "react";

function Lists(props){
    const fruits = ['apple', 'orange', 'banana'];
    
    return  <div>
                <ul>
                    {fruits.map(item=><li key={item}>{item}</li>)}
                </ul>
            </div>;
}


export default Lists;
