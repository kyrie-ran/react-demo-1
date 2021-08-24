import React, { Component } from 'react'

export default class renderReturn extends Component {
    render() {
        return [
            <div>hello world</div>,
            <div>hello react</div>
        ]
        // return (
        //     <>
        //         <div>hello world</div>
        //         <div>hello react</div>
        //     </>
        // )
        // return "<span>span</span>"
    }
}
