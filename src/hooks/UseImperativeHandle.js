import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const HYInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(
        ref,
        () => ({
            focus: () => {
                inputRef.current.focus();
            }
        }), [inputRef]);
    return <input ref={inputRef} type="text" />
})

export default function UseImperativeHandle() {
    const inputRef = useRef();
    return (
        <div>
            <HYInput ref={inputRef} />
            <button onClick={e => inputRef.current.focus()}>获取焦点</button>
        </div>
    )
}
