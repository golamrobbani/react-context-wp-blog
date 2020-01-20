import React,{Fragment} from 'react';
import FSinglePost from './view/single-post'
const Index = (props) => {
    return (
        <Fragment>
            <FSinglePost id={props.id}/>
        </Fragment>
    );
}

export default Index;