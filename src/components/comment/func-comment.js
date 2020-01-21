import React, { Fragment,useState,useEffect } from 'react';

import Axios from 'axios'
import ClientConfig from '../../app/client-config'
import { Link } from '@reach/router'
import RenderHTML from 'react-render-html';

const WPSiteURL = ClientConfig.siteUrl

const FuncComment = (props) => {

    console.log('sdfasdfasdfasdfasdfasdfasdfs',props.postID)

    const [error, setError] = useState('')
    const [comment, setComment] = useState([])


    useEffect(() => {
        if (props.postID) {
            Axios.get(`${WPSiteURL}/wp-json/wp/v2/comments?post=${props.postID}`)
                .then((r) => {
                    console.log('Comment Data', r.data)
                    setComment(r.data)
                    setError('')
                })
                .catch((e) => {
                    setError('Server Error')
                })
        }
    }, [props])

    const createMarkup = (data) => ({
        __html: data
    });

    return (
        <Fragment>

            <div id="comments">
                <h2 class="title"><span>04 Comments</span></h2>
                <div class="comments-inner">
                    <ul class="comment-list">
                        <li class="comment">
                            <div class="comment-body">
                                <div class="comment-head">
                                    <div class="comment-avatar">
                                        <img alt="avatar" src="images/avatar-150px.jpg" />
                                    </div>
                                    <div class="comment-info">
                                        <h5 class="title">Kendy</h5>
                                        <span class="comment-date">Aug 06, 2018</span>
                                    </div>
                                </div>
                                <div class="comment-context">
                                    <p>Design works within constraints. The Columban monks who crafted the Book</p>
                                    <div class="reply">
                                        <span class="comment-reply"><a class="comment-reply-link" href="#">Reply</a></span>
                                    </div>
                                </div>
                            </div>
                            <ul class="children">
                                <li class="comment">
                                    <div class="comment-body">
                                        <div class="comment-head">
                                            <div class="comment-avatar">
                                                <img alt="avatar" src="images/avatar.jpg" />
                                            </div>
                                            <div class="comment-info">
                                                <h5 class="title">KENDY</h5>
                                                <span class="comment-date">Aug 06, 2018</span>
                                            </div>
                                        </div>
                                        <div class="comment-context">
                                            <p>Design works within constraints. The Columban monks who crafted the Book</p>
                                            <div class="reply">
                                                <span class="comment-reply"><a class="comment-reply-link" href="#">Reply</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="comment">
                            <div class="comment-body">
                                <div class="comment-head">
                                    <div class="comment-avatar">
                                        <img alt="avatar" src="images/avatar-150px.jpg" />
                                    </div>
                                    <div class="comment-info">
                                        <h5 class="title">Kendy</h5>
                                        <span class="comment-date">Aug 06, 2018</span>
                                    </div>
                                </div>
                                <div class="comment-context">
                                    <p>Design works within constraints. The Columban monks who crafted the Book</p>
                                    <div class="reply">
                                        <span class="comment-reply"><a class="comment-reply-link" href="#">Reply</a></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="comment">
                            <div class="comment-body">
                                <div class="comment-head">
                                    <div class="comment-avatar">
                                        <img alt="avatar" src="images/avatar-150px.jpg" />
                                    </div>
                                    <div class="comment-info">
                                        <h5 class="title">Kendy</h5>
                                        <span class="comment-date">Aug 06, 2018</span>
                                    </div>
                                </div>
                                <div class="comment-context">
                                    <p>Design works within constraints. The Columban monks who crafted the Book</p>
                                    <div class="reply">
                                        <span class="comment-reply"><a class="comment-reply-link" href="#">Reply</a></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </Fragment>
    );
}

export default FuncComment;
