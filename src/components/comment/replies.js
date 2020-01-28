import React, { Fragment,useState,useEffect } from 'react';

import Axios from 'axios'
import ClientConfig from '../../app/client-config'
import { Link } from '@reach/router'
import RenderHTML from 'react-render-html';

const Replies = (props) => {


    const [error, setError] = useState('')
    const [replie, setReplie] = useState({})


    useEffect(() => {
        if (props.ParentURL) {
            Axios.get(props.ParentURL)
                .then((r) => {
                    console.log('Replyes', r.data)
                    setReplie(r.data)
                    setError('')
                })
                .catch((e) => {
                    setError('Server Error')
                })
        }
    }, [props])



    if (props.ParentURL !== '') {
console.log('fdfff',props.ParentURL)

        return (
            <Fragment>

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


            </Fragment>
        );
    } else {
        return '';
    }


}

export default Replies;
