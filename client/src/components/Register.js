import React, {useEffect , useState} from "react";
import {Link ,useHistory } from "react-router-dom"
import axios from "axios";


 
const Register = () => {

    const history = useHistory();

    const handleSubmit = async(e) =>{
        e.preventDefault()

        try{
       
        const body = {
            fullName: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
        }
        console.log(body)
        
        const res = await axios.post("http://localhost:5000/auth/register", body)
        console.log(res)

        history.push("/login")
       
    }
    catch(err){
        console.log(err)
    }
    }

  
  return(
    <center>
    <div className="form" style={{height: "100vh" ,display:"flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h2>Register here</h2>
        <form className="login" onSubmit={handleSubmit} style={{ width: "350px", display:"flex", alignItems: "center", flexDirection: "column", justifyContent:"space-around"}}>
      <input className="input" type="text" required placeholder="Enter full name" />
      <input className="input" type="email" required placeholder="Enter email" />
      <input className="input" type="password" required  placeholder="Enter password" />
      <input type="submit" className="sidebar__tweet" />
      </form>
      <p> Already have an account <Link to="/login"> login here</Link></p>
     
     <div style={{backgroundColor: "#50b7f5", color: "#fff" , width: "350px"}}>
       <h4> Demo Credentials</h4>
       <h4> Email : demo@gmail.com</h4>
       <h4>Password: demo</h4>
     </div>

    </div>
    </center>
  )
}


export default Register;