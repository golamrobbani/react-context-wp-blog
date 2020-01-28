import React, { Fragment, useState, useEffect } from 'react';

import Axios from 'axios'
import ClientConfig from '../../app/client-config'
import { Link } from '@reach/router'
import RenderHTML from 'react-render-html';
import Moment from 'react-moment'
import Replies from './replies'

const WPSiteURL = ClientConfig.siteUrl

const FuncComment = (props) => {

    const [error, setError] = useState('')
    const [comments, setComment] = useState([])

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



   let commentss= comments.filter(comment => (comment.parent===0))

    return (
        <Fragment>


            {error && <div className="alert alert-danger" dangerouslySetInnerHTML={createMarkup(error)} />}

            {commentss.length > 0 && (

                <div id="comments">
                    <h2 class="title"><span>04 Comments</span></h2>
                    <div class="comments-inner">
                        <ul class="comment-list">
                            {commentss.map(comment => {
                                return (
                                    <li class="comment">
                                        <div class="comment-body">
                                            <div class="comment-head">
                                                <div class="comment-avatar">
                                                    <img alt="avatar" src={comment.author_avatar_urls['96']} />
                                                </div>
                                                <div class="comment-info">
                                                    <h5 class="title">{comment.author_name}</h5>
                                                    <span class="comment-date">
                                                        <Moment format="D MMM YYYY" withTitle>
                                                            {comment.date}
                                                        </Moment>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="comment-context">
                                                {RenderHTML(comment.content.rendered)}
                                                <div class="reply">
                                                    <span class="comment-reply"><a class="comment-reply-link" href="#">Reply</a></span>
                                                </div>
                                            </div>
                                        </div>

                                        {comment._links.children !== undefined && <Replies ParentURL={comment._links.children['href']} />}

                                    </li>)

                            })}


                        </ul>
                    </div>
                </div>


            )}



        </Fragment>
    );
}

export default FuncComment;
