import React, { Fragment, useState, useEffect } from 'react';
import { Link,Redirect } from '@reach/router'

import Axios from 'axios'
import ClientConfig from '../../app/client-config'
import RenderHTML from 'react-render-html';
import Moment from 'react-moment'

const WPSiteURL = ClientConfig.siteUrl

const FuncCategoryPost = (props) => {


    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        
        Axios.get(`${WPSiteURL}/wp-json/wp/v2/posts?categories=${props.category_name}`)
            .then((r) => {
                console.log('useEffectResponseCategoryPostData', r.data)
                setPosts(r.data)
                setError('')
            })
            .catch((e) => {
                setError('Server Error')
            })

        console.log('props.category_name 4334343yuyuyu:', props.category_name)
        

    }, []);


    const myreload=(e,id)=>{
      //console.log('dsfasdfasdf',e)
      //window.location.reload();
     return <Redirect to={`/categories/${id}`} />
    }

    return (
        <Fragment>
            <div className="posts-inner">
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
                                                        <div key={cat.id} className="post-cat">
                                                            <Link onClick={e=>myreload(e,cat.id)}  to={`/category/${cat.term_id}`}>{cat.name}</Link>
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

export default FuncCategoryPost;
