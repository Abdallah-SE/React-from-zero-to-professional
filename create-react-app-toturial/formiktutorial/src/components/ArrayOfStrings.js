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
           friends: Yup.array().of(
                   Yup.string().required('Add valid friend name')
                )
        });
        return schema;
    }
    form  = (props) => {
        return <form onSubmit={props.handleSubmit}>
                   <hr />
                   <label>Array of Friends : </label>
                   <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {
                  props.values.friends.map((friend, index) => (
                    <div key={index}>
                        <Field name={`friends.${index}`} />
                                <button 
                                type="button"
                                onClick={()=>{arrayHelpers.remove(index)}}
                                >
                                -
                                </button>
                                <button 
                                type="button"
                                onClick={()=>{arrayHelpers.push('')}}
                                >
                                +
                                </button>
                                <ErrorMessage name={`friends.${index}`} /><br />
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
        <h1>Array Of Strings: </h1>
        <Formik 
         initialValues={{
            friends: ['ahmed', 'sayed', 'saad']
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