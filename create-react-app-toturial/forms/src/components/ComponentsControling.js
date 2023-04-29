import React, { Component } from "react";

///<!--Don't use double or single qutation o "" on onClick=-->

class ComponentsControling extends Component {
    
   
    state = { 
        value: 'default',
        selectValue: "1",
        checkedValue: true,
        radioValue: "2"
    };
   
    setValue = (event) => {
        const name = event.target.name;///get the const name
        let type = event.target.type;
        let value = '';
        
        if(type == 'checkbox'){
            value = event.target.checked;
        }else{
            value = event.target.value;
        }
        this.setState({
           [name]: value
        });
    }
    
    render (){///Render JSX html code
        return <div>
        <h1>Forms - Controll Components : -  </h1> 
        <input name="value" value={this.state.value} type="text" onChange={this.setValue} />
        <h2>TextArea</h2>
        <textarea name="value" value={this.state.value} onChange={this.setValue} />
        <h2>select</h2>
        <select name="selectValue"  value={this.state.selectValue}  onChange={this.setValue} >
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value="3">three</option>
            <option value={21}>twenty one</option>
            
        </select>
        <hr /> 
        <h2>changing the checkbox</h2>
        <input name="checkedValue" type="checkbox" checked={this.state.checkedValue} onChange={this.setValue} />
        
        <hr /> 
        <h2>changing the checkbox</h2>
        <div onChange={this.setValue}>
            <input name="radioValue"  type="radio" value="1" checked={this.state.radioValue == '1'}  />One
            <input name="radioValue"  type="radio" value="2" checked={this.state.radioValue == '2'} />Two
            <input name="radioValue"  type="radio" value="3" checked={this.state.radioValue == '3'} />Three
        </div>
        </div>;
    }
}

export default ComponentsControling;