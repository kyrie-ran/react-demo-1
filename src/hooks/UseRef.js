import React,{useRef,forwardRef} from 'react';

const FnCom = forwardRef((props,ref) => <input type="text" ref={ref}/>)

export default function UseRef() {
    const titleRef = useRef();
    const fnRef = useRef();
    console.log(titleRef);
    console.log(fnRef);
    return (
        <div ref={titleRef}>
            useref
            <FnCom ref={fnRef}/>
        </div>
    )
}
