import React from 'react'
import Link from 'next/link'
import FormikConfirmationForm from './Form'

const Email = () => {
    return (
        <section className="uk-flex uk-flex-center uk-flex-middle uk-text-center" uk-height-viewport="expand: true">
            <div>
                <div className="uk-text-lead">Confirm your email address</div>
                <p>
                    We have sent a 6-digit verification code to <span className="uk-label uk-text-lowercase">
                        dushyant@gmail.com
                    </span> <Link href="/register">
                        <a>Change</a>
                    </Link>
                </p>
                <p className="uk-text-danger">
                    Enter your code to verify your email.
            </p>
                <FormikConfirmationForm />
                <p className="uk-text-small">
                    didn't receive e-mail, check your spam or <button className="uk-text-small uk-text-lowercase uk-button uk-button-link">request to resend email</button>
                </p>
                <p className="uk-text-small">
                    Still having trouble receiving e-mail? Contact us at <button className="uk-text-small uk-text-lowercase uk-button uk-button-link">support@onthemend.com.au</button>
                </p>

            </div>
        </section>
    )
}


export default Email;