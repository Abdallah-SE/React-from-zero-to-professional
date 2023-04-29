import React, { Component } from "react";
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

///<!--Don't use double or single qutation o "" on onClick=-->

class NestedObjectForm extends Component {
    
    onSubmit  = (values) => {
        console.log(values);
    }
    schema  = () => {
        const schema = Yup.object().shape({
           name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('The name is Required'),
           social: Yup.object().shape({
                facebook: Yup.string()
                        .required('The facebook name is Required'),
                twitter: Yup.string()
                        .required('The twitter name is Required'),
           })
        });
        return schema;
    }
    form  = (props) => {
        return <form onSubmit={props.handleSubmit}>
        <label>Name: </label>
                   <Field name="name" type="text" />
                   <br />
                   <ErrorMessage name="name" /><br />
                   <hr />
                   <label>Email: </label>
                   <Field name="email" type="email" />
                   <label>Type Select: </label>
                   <Field component="select" name="color">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>
                    <hr />
                    <label>CheckBox Active or not: </label>
                    <Field name="active" type="checkbox" />
                    <label>Radio Active or not: </label>
                    <Field name="category" value="1" type="radio" />
                    <Field name="category" value="2" type="radio" />
                    <hr />
                    <label>Facebook: </label>
                    <Field name="social.facebook" />
                   <ErrorMessage name="social.facebook" /><br />
                   <label>Twitter: </label>
                    <Field name="social.twitter" />
                   <ErrorMessage name="social.twitter" /><br />
                   <button type="submit">Send</button>
                </form>
    }
   
    render (){///Render JSX html code
        return <div>
        <hr />
        <h1>Nested Objects: </h1>
        <Formik 
         initialValues={{
             name: "", 
             email: "",
             color: "", 
             active: false, 
             category: "",
             social: {
                 facebook: "",
                 twitter: ""
             }
         }}
         onSubmit={this.onSubmit}
         render = {this.form}
         validationSchema={this.schema()}
       />
       <hr />
        </div>;
    }
}

export default NestedObjectForm;