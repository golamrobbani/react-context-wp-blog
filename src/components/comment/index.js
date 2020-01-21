import React, { Fragment } from 'react';
import FuncComment from './func-comment'
//import ClassComment from './class-comment'

const Index = (props) => {
    return (
        <Fragment>
            <FuncComment postID={props.postID} />
        </Fragment>
    );
}

export default Index;
