import React, { Component } from "react";
import classNames from 'classnames';

import './App.css';

///<!--Don't use double or single qutation o "" on onClick=-->

class ClassNamesPackage extends Component {
        
     
    render (){///Render JSX html code
        ///fixed classes or with expressions
        let classes = classNames('test1', {'green' : 1<3, 'redText': 3==3, 'italicText': 1==1});
        
        
        
        
        return <div>
        <h1>Clasnames package: </h1>
             
            <div className={classes}>
              Clasnames package
            </div>
        </div>;
    }
}

export default ClassNamesPackage;