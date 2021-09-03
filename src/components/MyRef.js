import React, { Component,createRef,forwardRef } from 'react';
class ClassText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1
        }
    }
    render(){
        return (
            <>
                <p>classText {this.state.type}</p>
            </>
        )
    }
}

const FancyButton = forwardRef((props,ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
))
export default class MyRef extends Component {
    constructor(props){
        super(props);
        this.textInput = null;
        this.myRef = createRef();
        this.myClassRef = createRef();
        this.FancyButtonRef = createRef();
        this.setTextInputRef = element => {
            this.textInput = element;
        }
    }
    componentDidMount(){
        console.log(this.myRef.current);
        console.log(this.myClassRef.current);
        console.log(this.textInput);
        console.log(this.FancyButtonRef.current);
    }
    render() {
        return (
            <>
                <h3 ref={this.myRef}>h3</h3>
                <ClassText ref={this.myClassRef} />
                <input type="text" ref={this.setTextInputRef}/>
                <FancyButton ref={this.FancyButtonRef}>按钮</FancyButton>
            </>
        )
    }
}
