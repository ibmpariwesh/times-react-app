import { useState } from "react"

export default function Userlist() {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <table className=' table table-bordered table-hover table-responsive'>
                <thead>
                    <tr><td>First name</td>
                    <td>Age</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pariwesh</td>
                        <td>34</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}