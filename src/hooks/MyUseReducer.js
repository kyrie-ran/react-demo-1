// import React,{useState} from 'react'
import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case "increment":
            return {...state,counter: state.counter + 1};
        case "decrement":
            return {...state,counter: state.counter - 1};
        default :
            return state;
    }
}

export default function MyUseReducer() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    return (
        <div>
            {/* <p>Home当前计数：{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button> */}
            <p>Home当前计数：{state.counter}</p>
            <button onClick={() => dispatch({type: "increment"})}>+1</button>
            <button onClick={() => dispatch({type: "decrement"})}>-1</button>
        </div>
    )
}
