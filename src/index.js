import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store';
import { StoreContext } from './utils/context';

// function formatName(user){
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// }
// const element = (<h1>Hello,{formatName(user)}!</h1>)


ReactDOM.render(
    <StoreContext.Provider value={ store }>
        <App />
    </StoreContext.Provider>,
    document.getElementById('root')
);




// function tick (){
//     const element = (
//         <div>
//             <h1>Hello world</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,1000);