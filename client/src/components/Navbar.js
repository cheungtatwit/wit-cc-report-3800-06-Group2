import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {useHistory} from 'react-router-dom';

function Navbar() {
    let history = useHistory();
    const[search, setSearch] = useState("");
    
    const submit = (event, parameter) => {
        if(parameter !== ""){
            console.log(parameter);
            history.push(`/profile/${parameter}`, parameter);
        } else {
            if(localStorage.getItem("name") !== null) {
                history.push(`/profile/${localStorage.getItem("name")}`, localStorage.getItem("name"));
            }
        }
    }
    
    return(
        <div className = "Navbar">  
            <a href="/">Home</a>
            <div>
                <a href="" onClick={(e) => {submit(e,"")}}>Profile</a>
                <input type="text" id="searchText" onChange = {(event) => {setSearch(event.target.value);}}></input>
                <button onClick={(e) => {submit(e, search)}}>Search</button>
            </div>
            <div>
            <a href="/login">Login</a>
            <a href="/register" onClick={() => {localStorage.clear();}}>Logout</a>
            </div>
        </div>
    )
}

export default Navbar;