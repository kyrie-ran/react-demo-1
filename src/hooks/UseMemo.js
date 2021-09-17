import React, { useState, useMemo, memo } from 'react';
const HYINfo = memo(props => {
    console.log(222);
    return <p>姓名：{props.info.name} 年龄：{props.info.age}</p>;
})
function calcNumber(count) {
    console.log(111);
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += i;
    }
    return total;
}
export default function UseMemo() {
    const [count, setCount] = useState(10);
    const [show, setShow] = useState(true);
    const total = useMemo(() => calcNumber(count), [count]);
    // const info = { name: 'name', age: 1 };
    const info = useMemo(() => ({name: 'name',age: 18}), []);
    return (
        <div>
            <p>numberSum: {total}</p>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setShow(!show)}>show切换</button>
            <HYINfo info={info} />
        </div>
    )
}
