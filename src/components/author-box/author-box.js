import React, { Fragment } from 'react';

const AuthorBox = () => {
    return (
        <Fragment>

            <div class="author-box">
                <div class="header-top clearfix">
                    <div class="avatar-author">
                        <img src="images/avatar.jpg" alt="Avatar" />
                    </div>
                    <div class="author-name">
                        <h3 class="title">
                            <a href="#">Kendy</a>
                        </h3>
                        <div class="author-socials">
                            <a href="#" class="fa fa-behance" title="Behance"></a>
                            <a href="#" class="fa fa-dribbble" title="Dribbble"></a>
                            <a href="#" class="fa fa-facebook" title="Facebook"></a>
                            <a href="#" class="fa fa-google" title="Google Plus"></a>
                            <a href="#" class="fa fa-twitter" title="Twitter"></a>
                        </div>
                    </div>

                </div>
                <div class="author-description">
                    Kendy loves beautiful content and doesn't like to give in easily. I run responsive Web design workshops, online workshops and loves solving complex UX, front-end and performance problems in large companies.
								<a href="#">Get in touch.</a>
                </div>
            </div>

        </Fragment>
    );
}

export default AuthorBox;
