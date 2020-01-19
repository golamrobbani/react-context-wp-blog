import React from 'react';

import { connect,useDispatch } from 'react-redux'

const Control = (props) => {

    const dispatch = useDispatch()

    console.log(dispatch({ type: 'SET_ADD' }))


    return (
        <div>
            <button onClick={() => dispatch({ type: 'SET_ADD' })}> + ADD</button>
            <button onClick={() =>dispatch({ type: 'SET_SUB' }) }> - SUBB</button>
        </div>
    );
}



/* function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch({ type: 'SET_ADD' })
        },
        sub: () => {
            dispatch({ type: 'SET_SUB' })
        }
    }

}

export default connect(null, mapDispatchToProps)(Control); */


export default Control;
