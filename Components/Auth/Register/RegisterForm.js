import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import classes from './Register.module.css'
import Link from 'next/link'


const RegisterForm = ({
    touched = { email: '' },
    errors = { email: '' },
    isSubmitting
}) => {


    return (

        <div className="uk-box-shadow-small uk-padding-small uk-background-default uk-border-rounded">
            <Form className={["uk-form-stacked", classes.FormPadding].join(" ")}>

                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="form-stacked-text">
                        Your Tele-Health Practice Name<span className="uk-text-danger">*</span>
                    </label>

                    <div className="uk-form-controls uk-inline uk-width-1-1@m">
                        <Field
                            className={["uk-input uk-width-large@m",
                                (touched.name && errors.name) ? "uk-form-danger" : ""
                            ].join(" ")}
                            type="text"
                            name="text"
                        />
                    </div>
                </div>

                <div className="uk-margin">

                    <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="form-stacked-text">
                        Your Practice Web-Address (Url)<span className="uk-text-danger">*</span>
                    </label>

                    <div className="uk-form-controls uk-inline uk-width-1-1@m">
                        {/* <span className="uk-form-icon uk-icon" uk-icon="icon: mail"></span> */}
                        <Field
                            className={["uk-input uk-width-large@m",
                                (touched.url && errors.url) ? "uk-form-danger" : ""
                            ].join(" ")}
                            type="text"
                            name="text"
                        />
                    </div>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="form-stacked-text">
                        Email Address<span className="uk-text-danger">*</span>
                    </label>

                    <div className="uk-form-controls uk-inline uk-width-1-1@m">
                        {/* <span className="uk-form-icon uk-icon" uk-icon="icon: mail"></span> */}
                        <Field
                            className={["uk-input uk-width-large@m",
                                (touched.email && errors.email) ? "uk-form-danger" : ""
                            ].join(" ")}
                            type="email"
                            name="email"
                        />
                    </div>
                </div>
               
                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="form-stacked-text">
                        Password<span className="uk-text-danger">*</span>
                    </label>
                    <div className="uk-inline uk-form-controls uk-width-1-1@m">
                        {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
                        <Field
                            className={["uk-input uk-width-1-1@m",
                                (touched.password && errors.password) ? "uk-form-danger" : ""
                            ].join(" ")}
                            name="password"
                            type="password"
                        />
                    </div>
                </div>

                <div className="uk-margin">
                    <select name="title" className="uk-select uk-form-small uk-form-width-xsmall">
                        <option value="Dr">Dr</option>
                        <option value="Mr">Dr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                    </select>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="form-stacked-text">
                        FirstName<span className="uk-text-danger">*</span>
                    </label>
                    <div className="uk-inline uk-form-controls uk-width-1-1@m">
                        {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
                        <Field
                            className={["uk-input uk-width-1-1@m",
                                (touched.firstname && errors.firstname) ? "uk-form-danger" : ""
                            ].join(" ")}
                            name="text"
                            type="text"
                        />
                    </div>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label uk-text-left uk-text-primary" htmlFor="form-stacked-text">
                        LastName<span className="uk-text-danger">*</span>
                    </label>
                    <div className="uk-inline uk-form-controls uk-width-1-1@m">
                        {/* <span className="uk-form-icon" uk-icon="icon: lock"></span> */}
                        <Field
                            className={["uk-input uk-width-1-1@m",
                                (touched.lastname && errors.lastname) ? "uk-form-danger" : ""
                            ].join(" ")}
                            name="lastname"
                            type="text"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="uk-button uk-button-primary uk-border-pill uk-width-1-1"
                    disabled={isSubmitting}>
                    {isSubmitting ? <i className="fa fa-spinner fa-spin fa-fw"></i> : 'Create Account'}
                </button>

                <div className="uk-text-small uk-child-width-auto uk-margin-small uk-flex-between uk-grid-row-small uk-grid">
                    <div>
                        <div>
                            <Link href="/login"><span className="uk-text-small">Have an account?<a>Login Here</a></span></Link>
                        </div>
                    </div>

                </div>
            </Form>
        </div>

    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues({ email, phone, firstName, lastName, address, storeEmail, name, confirmPassword, password }) {
        return {
            email: email || '',
            password: password || '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required('Password is required'),
    }),
    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {

        const { email, password } = values;

    }
})(RegisterForm)



export default FormikLoginForm;