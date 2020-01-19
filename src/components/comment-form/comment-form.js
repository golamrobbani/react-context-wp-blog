import React, { Fragment } from 'react';

const CommentForm = () => {
    return (
        <Fragment>

            <div id="respond" class="comment-respond">
                <h2 class="title"><span>Leave a Reply</span></h2>
                <form action="#" method="post" class="contact">
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
                        <label>Your Comment *</label>
                        <textarea name="comment"></textarea>
                    </div>
                    <div class="contact-item form-submit">
                        <input name="submit" type="submit" id="submit" class="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default CommentForm;
