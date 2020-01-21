import React, { Component, Fragment } from 'react';

//same import post and single post and functionalty. 
//so need optamized next step
//it is laearning step

import Axios from 'axios'
import ClientConfig from '../../app/client-config'
import { Link } from '@reach/router'
import RenderHTML from 'react-render-html';
import Moment from 'react-moment'
const WPSiteURL = ClientConfig.siteUrl


class ClassPost extends Component {

    state = {
        loading: false,
        posts: [],
        error: ''
    };

    componentDidMount() {
        this.setState({ loading: true }, () => {
            Axios.get(`${WPSiteURL}/wp-json/wp/v2/posts/`)
                .then(res => {
                    if (200 === res.status) {
                        if (res.data.length) {
                            this.setState({ loading: false, posts: res.data });
                        } else {
                            this.setState({ loading: false, error: 'No Posts Found' });
                        }
                    }
                })
                .catch(err => this.setState({ loading: false, error: err }));
        })
    }

    createMarkup = (data) => ({
        __html: data
    });


    render() {
        const { loading, posts, error } = this.state;
        /* console.log('loading:',loading)
        console.log('posts length:',posts.length)
        console.log('error:',error) */
        return (
            <Fragment>
            <div class="posts-inner">
                {error && <div className="alert alert-danger" dangerouslySetInnerHTML={this.createMarkup(error)} />}
                {
                    posts.length > 0 && (
                        posts.map(post => {
                            //console.log(post)
                            return (
                                <article key={post.id} className="post">
                                    <div className="post-header">
                                        <h2 className="title">
                                            <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
                                        </h2>

                                        <div className="post-details">
                                            {post.cats.length > 0 &&
                                                post.cats.map(cat => {
                                                    return (
                                                        <div className="post-cat">
                                                            <Link to={`/post/${post.id}`}>{cat.name}</Link>
                                                        </div>
                                                    )
                                                })
                                            }

                                            <Link to={`/post/${post.id}`} className="post-date">
                                                <span>
                                                    <Moment format="D MMM YYYY" withTitle>
                                                        {post.date}
                                                    </Moment>
                                                </span>
                                            </Link>

                                            <div className="post-details-child">

                                                <Link to={`/post/${post.id}`} className="post-views">
                                                    {post.acf.post_view_count === null ?
                                                        `00 views` : post.acf.post_view_count < 10 ?
                                                            `0${post.acf.post_view_count} views` : `${post.acf.post_view_count} views`}
                                                </Link>

                                                <Link to={`/post/${post.id}`} className="post-comments">
                                                    {post.t_comment_num < 10 ?
                                                        `0${post.t_comment_num} Comments` : `${post.t_comment_num} Comments`}
                                                </Link>

                                                <div className="post-share-icon">
                                                    <span>SHARE</span>
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                                                        <li><a href="#"><i className="fa fa-google"></i><span>Google Plus</span></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                                                        <li><a href="#"><i className="fa fa-behance"></i><span>Behance</span></a></li>
                                                        <li><a href="#"><i className="fa fa-dribbble"></i><span>Dribbble</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post-media">
                                        <Link to={`/post/${post.id}`}>
                                            <img src={post.f_image_full} alt="Post" />
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="the-excerpt">
                                            {RenderHTML(post.excerpt.rendered)}
                                        </div>
                                    </div>

                                    <div className="read-more">
                                        <Link to={`/post/${post.id}`}>Continue Reading ...</Link>
                                    </div>

                                </article>
                            )
                        })
                    )
                }
                </div>
            </Fragment>
        );
    }
}
export default ClassPost;