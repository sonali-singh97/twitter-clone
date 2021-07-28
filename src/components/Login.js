import React, {useEffect , useState} from "react";
import Sawo from "sawo"
import styles from "./styles"

 const Login = () => {

    const [userPayload, setUserPayload] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "1c6f12f0-871b-44e4-ac36-99e527fad225",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "email",
            // Add the API key copied from 2nd step
            apiKey: "c6ce0c5b-9716-4068-aae3-c542e4c0bb16",
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {console.log("success")},
        };
    
        let sawo = new Sawo(config)
        console.log(sawo)
        sawo.showForm()

    })

    const onSuccessLogin = async(payload) => {
        setUserPayload(payload);
        setIsLoggedIn(true);
      }

    
     return(
        <React.Fragment>
      
        <div style={styles.containerStyle}>
          <section>
            <h1>React | Sawo Form Example</h1>
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
            {
              !isLoggedIn && (
                <div style={styles.formContainer} id="1c6f12f0-871b-44e4-ac36-99e527fad225">
                </div>
            )}
          </section>
        </div>
      </React.Fragment>
     )
}

export default Login;