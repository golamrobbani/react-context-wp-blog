import React, { Fragment } from 'react';
import FuncAuthorBox from './func-author-box'


const Index = (props) => {
    return (
        <Fragment>
            <FuncAuthorBox id={props.id} />
        </Fragment>
    );
}

export default Index;
