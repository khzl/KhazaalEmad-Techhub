import { useState,useEffect } from "react";

// Function Component
function Posts()
{
    const [posts,setPosts] = useState([]);
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(response => response.json())
        .then(data => setPosts(data));
    },[]);

    return(
        <div>
            <h2>Latest Posts:</h2>
            {posts.map(post =>(
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