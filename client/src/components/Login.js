import React, {useEffect , useState} from "react";
import {Link } from "react-router-dom";
import { Redirect , useHistory} from "react-router"
import Sawo from "sawo";
import axios from "axios";
import styles from "./styles"

 
const Login = () => {

  const history = useHistory();

  const handleSubmit = async(e) =>{
    e.preventDefault()


    try{
    const body = {
        email: e.target[0].value,
        password: e.target[1].value,
    }
    
    const res = await axios.post("http://localhost:5000/auth/login", body)
    console.log(res)
    localStorage.setItem("userId", res.data.token)
    localStorage.setItem("user",JSON.stringify(res.data.user))

    history.push("/")
}
catch(err){
    console.log(err)
}
}
  
  return(
    <center>
    <div className="form" style={{height: "100vh" ,display:"flex", alignItems: "center", flexDirection: "column",justifyContent: "center"}}>
      <h2>Login</h2>
      <form className="login" onSubmit={handleSubmit} style={{ width: "350px", display:"flex", alignItems: "center", flexDirection: "column", justifyContent:"space-around"}}>
      <input className="input" type="email" required placeholder="Enter email" />
      <input className="input" type="password" required  placeholder="Enter password" />
      <input type="submit" className="sidebar__tweet" />
      </form>
      <p> Don't have an account <Link to="/register"> signup here</Link></p>
      <div style={{backgroundColor: "#50b7f5", color: "#fff" , width: "350px"}}>
       <h4> Demo Credentials</h4>
       <h4> Email : demo@gmail.com</h4>
       <h4>Password: demo</h4>
     </div>
    </div>
    </center>
  )
}

// Using Sawo API

//  const Login = ({history}) => {
    
//     const [userPayload, setUserPayload] = useState({})
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
  
//     useEffect(() => {
//       const userId = localStorage.getItem("userId")
//       if(userId) {

//       }

//         var config = {

//             containerID: "1c6f12f0-871b-44e4-ac36-99e527fad225",

//             identifierType: "email",

//             apiKey: "c6ce0c5b-9716-4068-aae3-c542e4c0bb16",

//             onSuccess: (payload) => {
//               console.log("success");
//               console.log(payload);
//               onSuccessLogin(payload);
//           },
//         };
    
//         let sawo = new Sawo(config)
//         sawo.showForm()

//     }, [history])

//     const onSuccessLogin = async(payload) => {
//         setUserPayload(payload);
//         setIsLoggedIn(true);
//         console.log(payload);
//         localStorage.setItem("userId", payload.user_id);

//     history.push("/")
//       }

    
//      return(
//         <React.Fragment>
      
//         <div style={styles.containerStyle}>
//           <section>
//             <h1> Login </h1>

//            { !isLoggedIn &&
//                 <div >
//                 <div style={styles.formContainer} id="1c6f12f0-871b-44e4-ac36-99e527fad225">
//                 </div>
//                 </div>}
            
//           </section>
//         </div>
//       </React.Fragment>
//      )
// }

export default Login;