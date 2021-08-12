import React, { useEffect, useState, useCallback} from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./Home.css"

function Home(){
    let history = useHistory();
    const[posts, setPosts] = useState([]);
    const[newPost, submitPost] = useState("");
    const [resptest, setResp] = useState([]);
    
    useEffect(() => {
        console.log(localStorage.getItem("loggedIn"))
        if (!localStorage.getItem("loggedIn") || localStorage.getItem("loggedIn") === "false") {
            localStorage.setItem("loggedIn", false);
            console.log("here");
            history.push("/register");
        }
      }, []);
  
    useEffect(() => {
        Axios.get("http://34.236.140.196:3001/posts").then((response) => {
            setPosts(response.data);
        });
    },[resptest]);
    
    const submit = (event) => {
        Axios.post("http://34.236.140.196:3001/post", {post: newPost, token: localStorage.getItem("username")}).then((response)=> {
            setResp(response);
        });
    
    }
    
    return ( 
    <div className = "homePage">
        <div className = "submit">
            <label for="newPost">Create a new Post:</label>
            <input type="text" id="newPostText" onChange = {(event) => {submitPost(event.target.value);}}></input>
            <button onClick={submit}>Submit</button>
        </div>
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
    </div>);
}

export default Home;