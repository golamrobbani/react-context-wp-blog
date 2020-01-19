import React, { Fragment } from 'react';

const ConatctForm = () => {
    return (
        <Fragment>
            <form action="#" method="post" class="contact" style="margin-top: 10px;">
                <div class="contact-item">
                    <label>Your Name *</label>
                    <input name="author" value="" type="text" />
                </div>
                <div class="contact-item">
                    <label>Your Email *</label>
                    <input name="email" value="" type="email" />
                </div>
                <div class="contact-item">
                    <label>Website URL</label>
                    <input id="url" name="url" value="" type="text" />
                </div>
                <div class="contact-item">
                    <label>Message *</label>
                    <textarea name="comment"></textarea>
                </div>
                <div class="contact-item form-submit">
                    <input name="submit" type="submit" id="submit" class="submit" value="Submit" />
                </div>
            </form>
        </Fragment>
    );
}

export default ConatctForm;
