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

class ClassSinglePost extends Component {

    state = {
        loading: false,
        post: {},
        error: '',
        view_count: 0
    };

    createMarkup = (data) => ({
        __html: data
    });

    componentDidMount() {
        //props.id is passing id from multiple component by props
        //this is not good working it is removing context api or redux project
        //console.log('class component post id:',this.props.id)

        Axios.post( WPSiteURL + '/wp-json/jwt-auth/v1/token/', {
            username: 'admin', password: 'admin123'
        }).then(response => {
            console.log('Autho response',response)
            if (response.status === 200) {
                const data = response.data;
                
                localStorage.setItem('token', data.token);
            }
        }).catch(error => console.log('Autho Error',error));



        this.setState({ loading: true }, () => {
            Axios.get(`${WPSiteURL}/wp-json/wp/v2/posts/${this.props.id}`)
                .then(res => {

                    if (Object.keys(res.data).length) {
                        this.setState({ loading: false, post: res.data, view_count: res.data.acf.post_view_count });
                        let pv_count = res.data.acf.post_view_count === null ? 0 : res.data.acf.post_view_count
                        pv_count = Number(pv_count)
                        this.viewCountIncrement(pv_count)
                    } else {
                        this.setState({ loading: false, error: 'No Posts Found' });
                    }
                })
                .catch(err => this.setState({ loading: false, error: err.response.data.message }));
        })


        console.log('componentdid mount')


    }

    componentDidUpdate() {
        console.log('component did update');


        // let post = { ...this.state.post }

        // post.title = 'golam robbani'

        //  //tasks[Index].acf.task_completed = checked
        //  //tasks[Index].fields = { 'task_completed': checked }

        // console.log('postghdfghdfghfghdfgh',post)

        // Axios.put(`${WPSiteURL}/wp-json/wp/v2/posts/${post.id}`, post, {
        //     headers: { Authorization: 'Bearer ' + localStorage.getItem('login') }
        // }).then(res12 => {

        //     console.log('responseeeeee',res12)

        //     // if (Object.keys(res.data).length) {
        //     //     this.setState({ loading: false, post: res.data, view_count: res.data.acf.post_view_count });

        //     // } else {
        //     //     this.setState({ loading: false, error: 'No Posts Found' });
        //     // }
        // })
        //     .catch(err12 => {
        //         console.log('eeeeeeeerrrr',err12)
        //         //this.setState({ loading: false, error: err.response.data.message })
        //     });

    }

    viewCountIncrement = (v_num) => {
        this.setState({ view_count: v_num + 1 })
    }




    render() {
        const { loading, post, error } = this.state;



        const viewCount = this.state.view_count

        console.log('view count:', viewCount)

        console.log('single post', post)
        console.log('single post error', error)

        return (
            <Fragment>

                {error && <div className="alert alert-danger" dangerouslySetInnerHTML={this.createMarkup(error)} />}

                {Object.keys(post).length > 0 && (

                    <article className="post">
                        <div className="post-header">
                            <h2 className="title"><span>{post.title.rendered}</span></h2>

                            <div className="post-details">
                                {post.cats.length > 0 &&
                                    post.cats.map(cat => {
                                        return (
                                            <div className="post-cat">
                                                <Link to={`/post/${post.id}`}>{cat.name}</Link>
                                            </div>
                                        )
                                    })}
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
                                        {post.t_comment_num != 0 && post.t_comment_num < 10 ?
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
                            <img src={post.f_image_full} alt="Post" />
                        </div>
                        <div className="post-content">


                            <div className="the-excerpt">
                                {RenderHTML(post.content.rendered)}
                            </div>


                            {post.tags && (
                                <div className="post-tags">
                                    <strong>Tags: </strong>
                                    <ul>
                                        {post.tags.map(tag => {
                                            return (
                                                <li>
                                                    <Link to={`/post/${post.id}`}>{tag.name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )}


                            <div className="post-author">
                                Writed by  <a href="#">Kendy</a>
                            </div>


                        </div>


                    </article>
                )}

            </Fragment>
        );
    }
}

export default ClassSinglePost;