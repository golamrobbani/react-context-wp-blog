import React, { Fragment } from 'react';

const RegisterForm = () => {
    return (
        <Fragment>
            <form action="#" method="post" class="contact" >
                <div class="contact-item">
                    <label>Your Name *</label>
                    <input name="author" value="" type="text" />
                </div>
                <div class="contact-item">
                    <label>Username *</label>
                    <input name="username" value="" type="text" />
                </div>
                <div class="contact-item">
                    <label>Password *</label>
                    <input name="password" value="" type="text" />
                </div>
                <div class="contact-item">
                    <label>Your Email *</label>
                    <input name="email" value="" type="email" />
                </div>
                <div class="contact-item form-submit">
                    <input name="submit" type="submit" id="submit" class="submit" value="Submit" />
                </div>
            </form>

        </Fragment>
    );
}

export default RegisterForm;
