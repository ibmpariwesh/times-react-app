import axios from "axios";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Messages from "./Messages";
export default function Userform() { //stateful
    const [userform, setUserform] = useState({
        firstname: "Ram",
        age: 20
    }); //hook -function
    const [message, setMessage] = useState();
    const handleEvent = function (event) {
        console.log(event);
        setUserform({ ...userform, [event.target.name]: event.target.value })
    }

    const save = function (event) {
        const promise = axios.post(process.env.REACT_APP_SERVER_URL, userform);
        promise.then(function (response) {
            setMessage({...message, type: 'success', text: "Record was saved"})
        });
        promise.catch(function (error) {
            setMessage({...message, type: 'error', text: "Record was not saved" });
        })
    }
    const handleSelection = function (event) {
        setUserform({ ...userform, [event.target.name]: event.target.value })
    }
    return (//JSX
        <div>
            <h3>Create User</h3>
            <Messages message={message}></Messages>
            <div className="form-group">
                <input placeholder='First Name' className="form-control" name='firstname' value={userform.firstname} onChange={handleEvent}></input>
            </div>
            <input placeholder='Age' type='number' className="form-control" name='age' value={userform.age} onChange={handleEvent}></input>
            <label htmlFor="joiningDate">joining date:</label>
            <div className="form-group">
                <input type='date' className="form-control" name='joiningDate' value={userform.joiningDate} onChange={handleEvent}></input>
            </div>
            <select value='default'  className='dropdown' name='skill' onChange={handleSelection} >
                <option value='default'>Select the skill</option>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='React'>React</option>
            </select>
            <Button className="form-control" onClick={save}>Save</Button>
        </div >
    )
}