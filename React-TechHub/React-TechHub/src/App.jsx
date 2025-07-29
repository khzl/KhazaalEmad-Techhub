import { useState , useEffect } from 'react'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import MyImage from './images/download.jpeg'
import AnotherImage from './images/download-2.jpeg'
import UserCard from './UserCard'
import UserLists from './UserLists'

function Welcome()
  {
   return(
     <h2>Welcome To React Khazaal Emad</h2>
  );
  }

  function Counter()
 {
   const [count, setCount] = useState(10);

   const Increment = () => {
    if (count < 20){
      setCount(count + 2);
    }else{
      console.log("Ranged Limited : Cannot execed 20");
    }
   };

   const Decrement = () => {
    setCount(count - 2);
   };

   const Reset = () => {
    setCount(0);
   }

   return (
    <div style={{ textAlign: 'center' , marginTop: '50px'}}>
      <h2>Counter: {count}</h2>
      {count >= 20 && <p style={{ color: 'red' }}>Range Limited: Cannot exceed 20</p>}
       <button onClick={Increment}>+</button>
       <button onClick={Decrement}>-</button>
       <button onClick={Reset}>Reset</button>
     </div>
  );
  }

//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Welcome/>)

// Components
function Timer()
{

  const [seconds, setSeconds] = useState(0);
  // New state to control if the timer is running.
  // Initialize to true so it starts automatically.
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;

    // Only set up the interval if isRunning is true
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          // Auto-stop at 10 seconds
          if (newSeconds >= 10) {
            clearInterval(interval); // Clear the interval
            setIsRunning(false); // Set isRunning to false to stop the timer
            return 10; // Ensure it stops exactly at 10
          }
          return newSeconds;
        });
      }, 1000);
    }

    // Cleanup function: Clear the interval when the component unmounts
    // or when isRunning changes and the effect re-runs.
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Dependency array includes isRunning, so the effect re-runs when it changes

  // Function to handle stopping/resuming the timer
  const handleToggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Function to handle resetting the timer
  const handleResetTimer = () => {
    setSeconds(0);
    setIsRunning(false); // Stop the timer when reset
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Inter, sans-serif' }}>
      <h2 className="text-4xl font-bold mb-6">Time: {seconds} seconds</h2>
      <div className="space-x-4">
        <button
          onClick={handleToggleTimer}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        >
          {isRunning ? 'Stop Timer' : 'Resume Timer'}
        </button>
        <button
          onClick={handleResetTimer}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        >
          Reset Timer
        </button>
      </div>
      {seconds >= 10 && !isRunning && (
        <p className="mt-4 text-lg text-gray-600">Timer stopped automatically at 10 seconds.</p>
      )}
    </div>
  );
}

function Greeting(props)
{
  <h1>Hello , {props.name}</h1>;
}

function WelcomeProps(props)
{
  return (
  <div>
  <h2>Welcome, {props.name}!</h2>
  <h3>Your Age {props.age}</h3>
  {
    props.imageSrc &&(
      <div>
        <h4>Your Picture:</h4>
        <img src={props.imageSrc} alt={props.name + "'s Profile Picture"} 
        style={{maxWidth: '200px', borderRadius: '8px'}}/>
      </div>
    )
  }
  </div>
  );
}
function App() {
  //const [count, setCount] = useState(0)
  //const [count, setCount] = useState(12);
  // const [seconds,setSeconds] = useState(0);

  // useEffect(() =>{
  //   const timer = setInterval(() => {
  //     setSeconds(prev => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(timer); // Clear 
  // }, []); // Run only One Over Loading

  //---------------------------------------------
  // const Users = [
  //   {name: "Khazaal" , email: "Khazaal@gmail.com" , age: 24 , ImageUrl:"https://placehold.co/600x400/png"},
  //   {name: "Ali" , email: "Ali@gmail.com" , age: 24 , ImageUrl:"https://placehold.co/600x400/png"},
  //   {name: "Yaser", email: "Yaser@gmail.com" , age: 24 , ImageUrl:"https://placehold.co/600x400/png"}
  // ];

  return (
    <>
    <hr />
    <div>
      <UserLists/>
      {/* {Users.map((user,index) => (
        <UserCard key={index} name={user.name} email={user.email}/>
      ))} */}
    </div>
    <hr />
    <Welcome/>
    <Counter/>
    <hr />
    <Timer/>
    {/* <Timer/> */}
    <hr />
    <div style={{textAlign: 'center' , marginTop: '50px'}}>
      <h1>Welcome To App</h1>

      <WelcomeProps
      name = "Khazaal"
      age = {30}
      imageSrc = {MyImage}/>

      <hr />
      <WelcomeProps
      name = "Ali"
      age = {24}
      />

      <hr />
      <WelcomeProps
      name = "Khazaal"
      age = {30}
      imageSrc = {AnotherImage}/>
    </div>
    <hr />
    <div>
      <WelcomeProps name = "Khazaal" age = "24"/>
      <WelcomeProps name = "Yazen" age = "10"/>
    </div>
     {/* <div>
      <h1>Welcome To React Khazaal</h1>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <Timer/>
      <p>Timer : {seconds} seconds</p>
    </div> */}
    </>
  );
}

export default App
