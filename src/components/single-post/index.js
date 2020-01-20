import React, { Fragment } from 'react';
//import FuncSinglePost from './func-single-post'

import ClassSinglePost from './class-single-post'

const Index = (props) => {
    console.log('components props:',props)
    return (
        <Fragment>
            <ClassSinglePost id={props.id} />
        </Fragment>
    );
}

export default Index;
