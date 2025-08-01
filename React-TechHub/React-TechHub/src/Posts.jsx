import { useState,useEffect } from "react";
import axios from 'axios';
import './Posts.css';
// Function Component
function Posts()
{
    const [posts,setPosts] = useState([]);
    

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    //     .then(response => response.json())
    //     .then(data => setPosts(data));
    // },[]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=4")
        .then((response) => {
            setPosts(response.data);
        })
        .catch((error) => {
            console.error("Error Fetching Posts:" , error);
        });
    },[]);

    return(
        <div>
            <h2>Latest Posts:</h2>
            {posts.map((post) =>(
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <p>Hello Khazaal</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Posts;