import React,{useRef} from 'react';

export default function UseRef() {
    const titleRef = useRef();
    console.log(titleRef);
    return (
        <div ref={titleRef}>
            useref
        </div>
    )
}
