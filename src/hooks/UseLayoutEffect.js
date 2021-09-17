// import React, { useState, useEffect } from 'react';
import React, { useState, useLayoutEffect } from 'react';

export default function UseLayoutEffect() {
    const [count, setCount] = useState(10);
    // useEffect(() => {
    //     if(count === 0){
    //         setCount(Math.random());
    //     }
    // }, [count]);
    useLayoutEffect(() => {
        if(count === 0){
            setCount(Math.random());
        }
    }, [count]);
    return (
        <div>
            <p>number: {count}</p>
            <button onClick={e => setCount(0)}>change</button>
        </div>
    )
}
