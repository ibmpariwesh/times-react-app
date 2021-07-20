import axios from "axios";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
export default function Userform() {
    const [userform, setUserform] = useState({
        firstname: "Ram",
        age: 20
    }); //hook -function
    const handleEvent = function (event) {
        console.log(event);
        setUserform({ ...userform, [event.target.name]: event.target.value })
    }

    const save = function (event) {
        console.log(userform);
        const promise = axios.post("http://localhost:4200/users", userform);
        promise.then(function (response) {
            console.log(response);
        });
    }
    const handleSelection = function (event) {
        setUserform({ ...userform, [event.target.name]: event.target.value })
    }
    return (//JSX
        <div>
            <h3>Create User</h3>
            <div className="form-group">
                <input placeholder='First Name' className="form-control" name='firstname' value={userform.firstname} onChange={handleEvent}></input>
            </div>
            <input placeholder='Age' type='number' className="form-control" name='age' value={userform.age} onChange={handleEvent}></input>
            <label htmlFor="joiningDate">joining date:</label>
            <div className="form-group">
                <input type='date' className="form-control" name='joiningDate' value={userform.joiningDate} onChange={handleEvent}></input>
            </div>
            <select name='skill' onChange={handleSelection} >
                <option selected>Select the skill</option>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='React'>React</option>
            </select>
            <Button className="form-control" onClick={save}>Save</Button>
        </div >
    )

}