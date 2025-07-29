import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

// Function Components
function Posts()
{
    const [posts,SetPosts] = useState([]);

    useEffect(() =>{
        api.get("/posts?_limit = 10").then((response) =>
        SetPosts(response.data));
    },[]);

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) =>(
                    <li key={post.id}>
                       <Link to = {`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;