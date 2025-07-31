// function WithAuth(WrappedComponent) {
//   return function AuthenticatedComponent(props) {
//     const IsLoggin = props.IsLoggin;

//     if (!IsLoggin) {
//       return <h3>You Must Be Logged In To View This Page.</h3>;
//     }
//     return <WrappedComponent {...props} />;
//   };
// }

// export default WithAuth;
