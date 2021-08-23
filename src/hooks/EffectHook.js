import React, { useState, useEffect } from 'react';

export default function Example() {
    //声明一个叫 “count” 的 state 变量
    const [count, setCount] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[count]) // 仅在 count 更改时更新

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}