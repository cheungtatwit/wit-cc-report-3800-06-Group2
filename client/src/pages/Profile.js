import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";


function Profile(){
    let history = useHistory();
    const[posts, setPosts] = useState([]);
    const[newPost, submitPost] = useState("");
    const [resptest, setResp] = useState([]);
    const [curr, currentProfile] = useState(false);
    var user = history.location.state;
    
    useEffect(() => {
    console.log(localStorage.getItem("loggedIn"))
    if (!localStorage.getItem("loggedIn") || localStorage.getItem("loggedIn") == "false") {
        localStorage.setItem("loggedIn", false);    
        history.push("/register");
    } 
  }, []);
  
    useEffect(() => {
        if(user === localStorage.getItem("name")){
            currentProfile(true);
        } else {
            currentProfile(false);
        }
        console.log(user);
        Axios.get(`http://34.236.140.196:3001/profile/${user}`).then((response) => {
            setPosts(response.data);
            console.log(response.data);
        });
    },[user]);
    
    const submit = (event) => {
        Axios.post("http://34.236.140.196:3001/post", {post: newPost, token: localStorage.getItem("username")}).then((response)=> {
            setResp(response);
        });
    }
    
    return ( 
    <div className = "homePage">
    {curr? 
        <div className = "submit">
            <label for="newPost">Create a new Post:</label>
            <input type="text" id="newPostText" onChange = {(event) => {submitPost(event.target.value);}}></input>
            <button onClick={submit}>Submit</button>
        </div> : <div></div> }
        {posts.map((val,key) => {
            return(
                <div className = "post">
                    <div className = "author">
                    {val.author}
                    </div>
                    <div className = "timestamp">
                    {val.date}
                    </div>
                    <div className = "text">
                    {val.description}
                    </div>
                </div>
            )
            })
        }
    </div>
    );
}

export default Profile;