import { useState } from "react"


export default function Userform(){
    const [userform, setUserform] = useState({firstname: "Ram"}); //hook -function
    return (
        <div>
            <h3>Create User</h3>
            <input value={userform.firstname}></input>
        </div>
    )
}