import React, { Fragment } from 'react';
import CSinglePost from '../../../components/single-post'
const FSinglePost = (props) => {
    return (
        <Fragment>

            <CSinglePost id={props.id} />

        </Fragment>
    );
}

export default FSinglePost;
