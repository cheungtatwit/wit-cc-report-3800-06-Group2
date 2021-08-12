import React, { useState }from "react";
import "./Register.css";
import Axios from "axios"
import { useHistory } from "react-router-dom";

function Register(){
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setCPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const submit = (event) => {
        event.preventDefault();
        if(password !== passwordConfirm) {
            setMessage("Passwords do not match");
            return;
        }
        Axios.post("http://34.236.140.196:3001/register", {username: username, password: password,}).then((response)=> {
            if(response.data.message === 'Success'){
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("name", username);
                localStorage.setItem("username", response.data.usertoken);
                history.push("/", {"authenticated":true});
            } else {
                setMessage(response.data.message);
                console.log(response.data.message);
            }

        })
        
    }
    
    return (
        <div className = "registerContainer">
            <form id = "userDetails">
                <h1>Registration</h1>
                <div class="form-group"> 
                    <label for="email">Username:</label>
                    <input type = "username" class="form-control" id="username" placeholder = "Enter username" onChange = {(event) => {setUsername(event.target.value);}} name = "username"></input>
                </div>  
                    <div class="form-group"> 
                    <label for="pwd">Password:</label>
                    <input type = "password" class="form-control" id="pwd" placeholder = "Enter password"  onChange = {(event) => {setPassword(event.target.value);}} name = "pwd"></input>
                </div> 
                    <div class="form-group"> 
                    <label for="confirmPwd">Confirm Password:</label>
                    <input type = "password" class="form-control" id="confirmPwd" placeholder = "Confirm password"  onChange = {(event) => {setCPassword(event.target.value);}} name = "confirmPwd"></input>
                </div> 
                <button onClick={submit}>Register</button>
                <h1>{message}</h1>
            </form>
        </div>
    );
}

export default Register;
