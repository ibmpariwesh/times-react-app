import { useState } from "react"


export default function Userform(){
    const [userform, setUserform] = useState({firstname: "Ram"}); //hook -function
    const handleEvent = function (event){
        console.log(event);
        setUserform({...userform, firstname:event.target.value})
    }
    return (
        <div>
            <h3>Create User</h3>
            <input value={userform.firstname} onChange={handleEvent}></input>
        </div>
    )
}