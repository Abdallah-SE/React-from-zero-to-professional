import React, { Component } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

///<!--Don't use double or single qutation o "" on onClick=-->

class ArrayOfStrings extends Component {
    
    onSubmit  = (values) => {
        console.log(values);
    }
    schema  = () => {
        const schema = Yup.object().shape({
           phoneNubmers: Yup.array().of(
                   Yup.object().shape({
                       phone: Yup.number().typeError('Phone Must be number').required("The phone field is required!"),
                       extension: Yup.number().typeError('extension Must be number').required("The extension field is required!")
                   })
                )
        });
        return schema;
    }
    form  = (props) => {
        return <form onSubmit={props.handleSubmit}>
                   <hr />
                   <label>Array of Objects Example Phones info: </label>
                   <FieldArray
            name="phoneNubmers"
            render={arrayHelpers => (
              <div>
                {
                  props.values.phoneNubmers.map((friend, index) => (
                    <div key={index}>
                        <Field name={`phoneNubmers.${index}.phone`} placeholder="phone" />
                        <ErrorMessage name={`phoneNubmers.${index}.phone`} /><br />

                        <Field name={`phoneNubmers.${index}.extension`} placeholder="extension" />
                        <ErrorMessage name={`phoneNubmers.${index}.extension`} /><br />

                                <button 
                                type="button"
                                onClick={()=>{arrayHelpers.remove(index)}}
                                >
                                -
                                </button>
                                <button 
                                type="button"
                                onClick={()=>{arrayHelpers.push({phone: '', extension: ''})}}
                                >
                                +
                                </button>
                    </div>
                  ))}
              </div>
            )}
          />
                   <br />
                  
                   
                </form>
    }
   
    render (){///Render JSX html code
        return <div>
        <hr />
        <h1>Array Of Objects: </h1>
        <Formik 
         initialValues={{
            phoneNubmers: [
                {
                    phone: '024374',
                    extension: "12"
                },
                {
                    phone: '02333374',
                    extension: "90"
                },
            ]
         }}
         onSubmit={this.onSubmit}
         render = {this.form}
         validationSchema={this.schema()}
       />
       <hr />
        </div>;
    }
}

export default ArrayOfStrings;