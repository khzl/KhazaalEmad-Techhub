// const WithExtraFeature =(WrappedComponent) => {
//     return function EnhancedComponent(props){
//         return (
//             <div style={{border: '2px solid red'}}>
//                 <WrappedComponent {...props}/>
//             </div>
//         );
//     };
// };

// function MyCompoent(props){
//     return <h1>Hello, {props.name}</h1>;
// }

// const Enhanced = WithExtraFeature(MyCompoent);
// <Enhanced name = "Ali"/>