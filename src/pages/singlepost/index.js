import React, { Fragment } from 'react';
import Layout from '../../layout/index'

import SinglePost from '../../features/single-post'
import Pagination from '../../components/pagination'
import RelatedPost from '../../components/related-post'
import AuthorBox from '../../components/author-box'
import Comments from '../../components/comment'
import CommentForm from '../../components/comment-form'

const Index = () => {
    return (
        <Fragment>
            <Layout>
                <SinglePost />
                <Pagination/>
                <RelatedPost/>
                <AuthorBox/>
                <Comments/>
                <CommentForm/>
            </Layout>
        </Fragment>
    );
}

export default Index;
