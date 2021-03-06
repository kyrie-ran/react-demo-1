import React, { useState } from 'react';

export default function Example() {
    //声明一个叫 “count” 的 state 变量
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
        </div>
    )
}