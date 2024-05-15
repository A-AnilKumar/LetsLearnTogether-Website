import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className='mb-2' controlId='exampleForm.ControlInput1'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='enter your password' />
      </Form.Group>
    </Form>
  );
}


function Login(){
   return(
    <>
    <TextControlsExample />
    </>
   );
}


export default Login;
// const Login = (onSubmit) =>{
    
//     const WelcomePage = () =>{
//         return ("Welcome to LLT");
//     }
//     return(

//         <div className="login">
//             <h1> Login </h1>
//             <form onSubmit = {WelcomePage}>
//                 <label htmlFor = "username">Enter username or Email</label> <br/>
//                 <input type="text/email"></input> <br/>
//                 <label htmlFor ="password">Password </label> <br/>
//                 <input type="password"></input> <br/>
//                 <button type="button">Login</button>
//             </form>
//         </div>
//     );   
// }
