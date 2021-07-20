import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react"
import Counter from "./Counter";

export default function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (users.length !== 0) {
            return;
        }
        console.log('called......................');
        const promise = axios.get("http://localhost:4200/users");
        promise.then(response => setUsers(response.data))
    })
    return (
        <div><Counter count={users.length}></Counter>
            <table className=' table table-compact table-bordered table-hover table-responsive table-striped'>
                <thead>
                    <tr><th>First name</th>
                        <th>Age</th>
                        <th>Joining Date</th>
                        <th>??</th></tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <tr key={index}>
                        <td>{user.firstname}</td>
                        <td>{user.age}</td>
                        <td>{user.joiningDate}</td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}