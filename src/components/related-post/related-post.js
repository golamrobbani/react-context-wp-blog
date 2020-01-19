import React, { Fragment } from 'react';

const RelatedPost = () => {
    return (
        <Fragment>

            <div id="related-posts">
                <h2 class="title"><span>Related Posts</span></h2>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="post">
                            <div class="post-media" style={{backgroundImage: "url(images/posts/4.jpg)"}} >
                                <a href="single.html">
                                    <img src="images/posts/4.jpg" alt="Image" />
                                </a>
                            </div>
                            <div class="post-entry">
                                <h3 class="title">
                                    <a href="single.html">Living Lagom in Sweden: An Interview With Lola Akerstrom</a>
                                </h3>
                                <div class="post-details">
                                    <a href="#" class="post-date"><span>Aug 06, 2018</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="post">
                            <div class="post-media" style={{backgroundImage: "url(images/posts/2.jpg)"}}>
                                <a href="single.html">
                                    <img src="images/posts/2.jpg" alt="Image" />
                                </a>
                            </div>
                            <div class="post-entry">
                                <h3 class="title">
                                    <a href="single.html">Living Lagom in Sweden: An Interview With Lola Akerstrom</a>
                                </h3>
                                <div class="post-details">
                                    <a href="#" class="post-date"><span>Aug 06, 2018</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default RelatedPost;
