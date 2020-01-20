import React, { Fragment } from 'react';
import Layout from '../../layout/index'

import SinglePost from '../../features/single-post'
import Pagination from '../../components/pagination'
import RelatedPost from '../../components/related-post'
import AuthorBox from '../../components/author-box'
import Comments from '../../components/comment'
import CommentForm from '../../components/comment-form'

const Index = (props) => {
console.log('pages post props:',props)
    return (
        <Fragment>
            <Layout>
                <SinglePost id={props.id} />
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
