import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    // UseNavigate Hook is used to programmatically navigate to different routes
    const GoToAbout = () => {
        navigate("/about");
    }
    return(
        <>
        <h1>Home Page</h1>
        <button onClick={GoToAbout}>Go To About</button>
        </>
    );
}

export default Home;