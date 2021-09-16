import React, { useState } from 'react'

export default function ComplexHookState() {
    const [friends, setFriends] = useState(['name1', 'name2']);
    const [person, setPerson] = useState([{name:'a',age: 18},{name:'b',age: 20}]);
    const addAge = (index) => {
        let newPerson = [...person];
        newPerson[index].age ++;
        setPerson(newPerson);
    }
    const delPerson = (index) => {
        let newPerson = [...person];
        newPerson.splice(index,1);
        setPerson(newPerson);
    }
    return (
        <div>
            <ul>
                {
                    friends.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
            <button onClick={e => setFriends([...friends,'name'])}>添加好友</button>
            <ul>
                {
                    person.map((item,index) => {
                        return (<li key={index}>
                                    name:{item.name} age:{item.age}
                                    <button onClick={e => addAge(index)}>age+1</button>
                                    <button onClick={e => delPerson(index)}>删除</button>
                                </li>)
                    })
                }
            </ul>
        </div>
    )
}
