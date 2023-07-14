import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/api/users")
            .then((result)=>{
                setUsers(result.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    })
    return (
        <>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App
