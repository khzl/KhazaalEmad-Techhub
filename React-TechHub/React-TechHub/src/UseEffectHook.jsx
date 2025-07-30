// const { useEffect } = require("react");

// useEffect(() => {
//     // Run When Loading Components Or When Change Value Of Array
    
// }, [dependency]);

// // Types Of UseEffect 
// // 1- ComponentsDidMount (Just Only One)
// useEffect(() => {
//     console.log("Mounted...!");
// },[]);

// // 2- When Per Update For Value Specific
// useEffect(() =>{
//     console.log("Counted Mounted...!");
// }, [count]);

// // 3- ComponentsWillUnmount (Clear After Finish)
// useEffect(() => {
//     const Timer = setInterval(...);
//     return () => clearInterval(Timer);
// },[]);