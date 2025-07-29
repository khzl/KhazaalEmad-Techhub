import { useState, useEffect } from "react";
import api from "../api";

// Function Components
function Todos()
{
    const [todos,SetTodos] = useState([]);

    useEffect(() =>{
        api.get("/todos?_limit = 10").then((response) =>
        SetTodos(response.data));
    },[]);

    return(
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) =>(
                    <li key={todo.id}>
                        {todo.title} ✅ {todo.completed ? "Done" : "Pending"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;