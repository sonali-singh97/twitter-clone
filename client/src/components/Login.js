import React, {useEffect , useState} from "react";
import Sawo from "sawo";
import axios from "axios";
import styles from "./styles"

 const Login = () => {

    const [userPayload, setUserPayload] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    useEffect(async() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "1c6f12f0-871b-44e4-ac36-99e527fad225",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "email",
            // Add the API key copied from 2nd step
            apiKey: "c6ce0c5b-9716-4068-aae3-c542e4c0bb16",
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
              console.log("success");
              console.log(payload);
              onSuccessLogin(payload);
          },
        };
    
        let sawo = new Sawo(config)
        sawo.showForm()

    })

    const onSuccessLogin = async(payload) => {
        setUserPayload(payload);
        setIsLoggedIn(true);

        localStorage.setItem("userId", payload.user_id);
        // localStorage.setItem("userName", payload.)
      
        // const body = {
        //   "user_id": "2d0dfcf0-d920-4c0c-95b1-b50db7660bc4"
        // }
        // const res = await axios.post("https://api.sawolabs.com/api/v1/userverify/", body )
        // console.log("response :")
        // console.log(res)

        // const body = {
        //   userId: "2d0dfcf0-d920-4c0c-95b1-b50db7660bc4",
        //   email:"sonali122000@gmail.com",
        //   fullName:"Sonali Singh"
        // }
        // const res = await axios.post("https://localhost:5000/login", body);
        // console.log(res);
      }

    
     return(
        <React.Fragment>
      
        <div style={styles.containerStyle}>
          <section>
            <h1> Login </h1>
            {/* Showing Successful login message */}
            {isLoggedIn && (
              <React.Fragment>
                <div style={styles.loggedin}>
                  <h2>User Successfull login</h2>
                  <div>UserId: {userPayload.user_id}</div>
                  <div>Verification Token: {userPayload.verification_token}</div>
                </div>
              </React.Fragment>
            )}
  
            {/* Showing login form */}
           
                <div >
                <div style={styles.formContainer} id="1c6f12f0-871b-44e4-ac36-99e527fad225">
                </div>
                </div>
            
          </section>
        </div>
      </React.Fragment>
     )
}

export default Login;