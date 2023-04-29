import React from "react";

function Age(props){
    let templateAge = '';
    
    if(props.age > 12){
        templateAge = <h1>Your age is older than 12</h1>;
    }else {
        templateAge = "Your age is smaller than 12";
    }
    return templateAge;
}

export default Age;
