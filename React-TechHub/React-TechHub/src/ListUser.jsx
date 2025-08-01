// Function Component 

function ListUser()
{
    const Users = ["Khazaal", "yazen","Yaser"];

    return (
        <ul>
            {Users.map((user,index) => (
            <li key={index}>{user}</li>
            ))}
        </ul>
    );
}

export default ListUser;