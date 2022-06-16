import React from 'react';
import {useSelector, useDispatch} from "react-redux"




function Counter() {

    const counter = useSelector(state => state.value);
    const dispatch = useDispatch()
    console.log(counter);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}  className="btn btn-primary">Increment +</button>
            <button onClick={() => dispatch({type: "DECREMENT"})} className="btn btn-danger">Decrement -</button>
            <button onClick={() => dispatch({type: "RANDOM", payload: Math.floor(Math.random() * 10)})} className="btn btn-secondary">Random</button>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch({type: "INCREMENT"}),
//         dec: () => dispatch({type: "DECREMENT"}),
//         random: () => {
//             const numberRandom = Math.floor(Math.random() * 10);
//             return dispatch({type: "RANDOM", payload: numberRandom})
//         } 
//     }
// }


export default /* connect(mapStateToProps, mapDispatchToProps) */ Counter;