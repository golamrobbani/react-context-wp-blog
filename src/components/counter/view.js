import React from 'react';
import { connect,useSelector } from 'react-redux'

const View =()=> {
    const counterState = useSelector(state=>state.counterReducer)

    console.log(counterState)

    return (
        <div>
            <h1>i am view</h1>
            <h1>{counterState.count}</h1>
        </div>
    );
}

/* const mapStateTopProps = (state) => {
   return{
    count:state.counterReducer.count
   }

}

export default connect(mapStateTopProps)(View); */

export default View



