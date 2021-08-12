import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import Axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    let history = useHistory();

    const login = (event) => {
        event.preventDefault();
        if(username === ""){
          setMessage("Enter a username")
          return;
        }
        Axios.post("http://34.236.140.196:3001/login", {
          username: username,
          password: password,
        }).then((response) => {
          if (response.data.loggedIn) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("name", username);
            localStorage.setItem("username", response.data.token);
            history.push("/", {"authenticated":true});
          } else {
            setMessage(response.data.message);
          }
        });
  };
 
  return (
        <div className = "registerContainer">
            <form id = "userDetails">
                <h1>Login</h1>
                <div class="form-group"> 
                    <label for="email">Username:</label>
                    <input type = "username" class="form-control" id="username" placeholder = "Enter username" onChange = {(event) => {setUsername(event.target.value);}} name = "username"></input>
                </div>  
                    <div class="form-group"> 
                    <label for="pwd">Password:</label>
                    <input type = "password" class="form-control" id="pwd" placeholder = "Enter password"  onChange = {(event) => {setPassword(event.target.value);}} name = "pwd"></input>
                </div> 
                <button onClick={login}>Login</button>
                <h1>{message}</h1>
            </form>
        </div>
    );
    
}

  export default Login;