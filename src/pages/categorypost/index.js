import React, { Fragment } from 'react';
import Layout from '../../layout/index'

import FCaegoryPost from '../../components/category-post'


const Index = (props) => {

    return (
        <Fragment>
            <Layout>
                <FCaegoryPost category_name={props.category_name} />
            </Layout>
        </Fragment>
    );
}

export default Index;
