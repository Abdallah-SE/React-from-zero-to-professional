import React, { Component } from "react";
import './App.css';

///<!--Don't use double or single qutation o "" on onClick=-->

class JSDynamicClassName extends Component {
        
     
    render (){///Render JSX html code
        ///using string of variables
        let classes = '';
        
        if(true) {
            classes +='green ';
        }
        if(true) {
            classes +='whiteText ';
        }if(true) {
            classes +='boldText ';
        }
        //using array of strings
        let classes2 = [];
        if(true) {
            classes2.push('green');
        }
        if(true) {
            classes2.push('redText');
        }if(true) {
            classes2.push('italicText');
        }
        
        
        return <div>
            <div className={classes}>
               Test
            </div>
            <div className={classes2.join(' ')}>
               second Test
            </div>
        </div>;
    }
}

export default JSDynamicClassName;