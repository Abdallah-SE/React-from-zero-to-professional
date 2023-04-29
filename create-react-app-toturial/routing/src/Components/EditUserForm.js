import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function EditUserForm(props) {
    const schema = Yup.object().shape({
        name: Yup.string().required("Please enter the name"),
        email: Yup.string().email().required("Please enter the email")
    })
    
    return <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render={props => {
            return  <Form>
            
                <label>Name ~ </label>
                <Field  name="name" />
                <ErrorMessage name="name" />

                <label>Email ~ </label>
                <Field name="email" />
                <ErrorMessage name="email" />

                <button type="submit">Send</button>
             </Form>
            }}
        />
}
