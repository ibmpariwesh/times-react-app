import axios from "axios";
import { useEffect, useState } from "react"
import Counter from "./Counter";

export default function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // if (users.length !== -1) {
        //     return;
        // }
        console.log('called......................');
        const promise = axios.get("http://localhost:4200/users");
        promise.then(response => setUsers(response.data))
    }, [])
    const deleteUser = function () {
        // confirm("are you sure");
        const promise = axios.delete("http://localhost:4200/users/" + this);
        promise.then(response => {
            //remove delete record from list
            users.splice(arguments[0], 1);
            const users1 = [...users]; //time vs space complexity
            setUsers(users1);
        })
    }
    return (
        <div>
            {/* <Counter count={users.length}></Counter> */}
            <table className=' table table-compact table-bordered table-hover table-responsive table-striped'>
                <thead>
                    <tr><th>First name</th>
                        <th>Age</th>
                        <th>Joining Date</th>
                        <th>??</th></tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.age}</td>
                        <td>{user.joiningDate}</td>
                        <td><button className='btn btn-danger' onClick={deleteUser.bind(user.id, index)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}