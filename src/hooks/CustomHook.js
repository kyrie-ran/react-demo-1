import React, { useEffect, useState } from 'react';

const Home = () => {
    useLoggingLife('home');
    return <div>home</div>
}

const User = () => {
    useLoggingLife('user');
    return <div>user</div>
}

export default function CustomHook() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {show && <Home />}
            {show && <User />}
            <button onClick={ e => setShow(!show) }>change show</button>
        </div>
    )
}

const useLoggingLife = name => {
    useEffect(() => {
        console.log(`${name}组件被创建出来了`);
        return () => {
            console.log(`${name}组件被销毁了`);
        }
    }, [name]);
}