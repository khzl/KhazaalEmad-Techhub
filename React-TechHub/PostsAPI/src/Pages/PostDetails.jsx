// Dynamic Route

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

// function Components
function PostDetails()
{
    const {id} = useParams;
    const [post,SetPost] = useState(null);
    const [comments,Setcomments] = useState([]);

    useEffect(() =>{
        api.get(`/posts/${id}`).then((response) =>
        SetPost(response.data));
        api.get(`/posts/${id}/comments`).then((response) =>
        Setcomments(response.data));
    },[id]);

    if (!post)
        return <p>Loading.........</p>;

    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <h3>Comments</h3>
            <ul>
                {comments.map((comment) =>(
                    <li key = {comment.id}>
                        <strong>{comment.name}</strong> : {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostDetails;