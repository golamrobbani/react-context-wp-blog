import React, { Fragment } from 'react';
import Layout from '../../layout/index'

import SinglePost from '../../features/single-post'


const Index = (props) => {
console.log('pages post props:',props)
    return (
        <Fragment>
            <Layout>
                <SinglePost id={props.id} />
            </Layout>
        </Fragment>
    );
}

export default Index;
