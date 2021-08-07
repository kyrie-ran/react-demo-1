import React, { Component } from 'react'

// export default class List extends Component {
//     render() {
//         const numbers = [1,2,3,4,5];
//         return (
//             <div>
//                 <ul>
//                     {
//                         numbers.map(item => {
//                             return <li>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

export default class List extends Component {
    render() {
        function NumberList(props){
            const numbers = props.numbers;
            const listItems = numbers.map(number => <li key={number}>{number}</li>);
            return (
                <ul>{listItems}</ul>
            );
        }
        const numbers = [1,2,3,4,5];
        return (
            <div>
                <NumberList numbers={numbers}/>
            </div>
        )
    }
}