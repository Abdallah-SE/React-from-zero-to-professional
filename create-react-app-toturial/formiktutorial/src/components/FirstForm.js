import React, { Component } from "react";
import { Formik, Field, ErrorMessage} from 'formik';
 import * as Yup from 'yup';

///<!--Don't use double or single qutation o "" on onClick=-->

class FirstForm extends Component {
    
    onSubmit  = (values) => {
        console.log(values);
    }
    schema  = () => {
        const schema = Yup.object().shape({
           name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('The name is Required')
        });
        return schema;
    }
    form  = (props) => {
        return <form onSubmit={props.handleSubmit}>
        <label>Name: </label>
                   <Field name="name" type="text" />
                   <br />
                   <ErrorMessage name="name" /><br />
                   <label>Email: </label>
                   <Field name="email" type="email" />
                   <label>Type Select: </label>
                   <Field component="select" name="color">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>
                    <label>CheckBox Active or not: </label>
                    <Field name="active" type="checkbox" />
                    <label>Radio Active or not: </label>
                    <Field name="category" value="1" type="radio" />
                    <Field name="category" value="2" type="radio" />

                   <button type="submit">Send</button>
                </form>
    }
   
    render (){///Render JSX html code
        return <div>
        <Formik 
         initialValues={{name: "", email: "", color: "", active: false, category: ""}}
         onSubmit={this.onSubmit}
         render = {this.form}
         validationSchema={this.schema()}
       />
        </div>;
    }
}

export default FirstForm;