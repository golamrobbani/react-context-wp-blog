import React, { Fragment } from 'react';
//import FuncPost from './func-post'
import FuncCategoryPost from './func-category-post'

const Index = (props) => {
    return (
        <Fragment>
            <FuncCategoryPost category_name={props.category_name} />
        </Fragment>
    );
}

export default Index;


