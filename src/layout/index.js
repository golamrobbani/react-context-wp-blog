import React, { Fragment } from 'react';
import Layout from './view/main-layout'
const Index = (props) => {
    return (
        <Fragment>
            <Layout>
                {props.children}
            </Layout>
        </Fragment>
    );
}

export default Index;
