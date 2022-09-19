import {useState, useEffect} from 'react';
import User from './User';
export default function Users(props){
    let [users, setUsers] = useState([]);
    let [use, setUse] = useState({});
    const click = (x)=>{
        setUse(x);
    }
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
            console.log(value)
        })},[]);
    return(
        <div>
            <hr/>
            {JSON.stringify(use)}
            <hr/>
            {users.map((user, index)=><User key={index} user={user} y={click}/>)}
        </div>
    )
}