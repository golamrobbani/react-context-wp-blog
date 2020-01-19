import React, { Fragment, Component } from 'react';
import { Link } from '@reach/router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../features/post/postActions';

class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {

        console.log(this.props)

        const id = 2
        return (
            <Fragment>

                <article class="post">
                    <div class="post-header">
                        <h2 class="title">
                            <Link to={`/post/${id}`}>Creativity is more than a song and dance act</Link>
                        </h2>


                        <div class="post-details">
                            <div class="post-cat">
                                <a href="#">Travel</a>
                            </div>
                            <a href="#" class="post-date"><span>Aug 06, 2018</span></a>
                            <div class="post-details-child">
                                <a href="#" class="post-views">15 views</a>
                                <a href="#" class="post-comments">03 Comments</a>
                                <div class="post-share-icon">
                                    <span>SHARE</span>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                        <li><a href="#"><i class="fa fa-google"></i><span>Google Plus</span></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                        <li><a href="#"><i class="fa fa-behance"></i><span>Behance</span></a></li>
                                        <li><a href="#"><i class="fa fa-dribbble"></i><span>Dribbble</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="post-media">
                        <a href="single.html">
                            <img src="images/posts/1.jpg" alt="Post" />
                        </a>
                    </div>
                    <div class="post-content">


                        <div class="the-excerpt">
                            <p>Morbi leo enim, laoreet eget urna id, ullamcorper condimentum urna. Curabitur accumsan sem et nisi ultricies porttitor. Aliquam sed nunc elit. Nunc faucibus interdum mauris at mattis. Phasellus congue volutpat porttitor.
                                Vivamus fringilla iaculis ex, et condimentum magna pharetra id. Aliquam erat volutpat. Nam odio velit, egestas vel leo tempus, luctus dapibus mauris ...
                </p>
                        </div>

                    </div>

                    <div class="read-more">
                        <a href="single.html">Continue Reading ...</a>
                    </div>


                </article>

            </Fragment>
        );
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Post);
