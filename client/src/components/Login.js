import React, {useEffect , useState} from "react";
import Sawo from "sawo";
import axios from "axios";
import styles from "./styles"

 const Login = ({history}) => {
    
    const [userPayload, setUserPayload] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    useEffect(() => {
      const userId = localStorage.getItem("userId")
      if(userId) {
       // history.push("/");
        //setIsLoggedIn(true);
      }

        var config = {

            containerID: "1c6f12f0-871b-44e4-ac36-99e527fad225",

            identifierType: "email",

            apiKey: "c6ce0c5b-9716-4068-aae3-c542e4c0bb16",

            onSuccess: (payload) => {
              console.log("success");
              console.log(payload);
              onSuccessLogin(payload);
          },
        };
    
        let sawo = new Sawo(config)
        sawo.showForm()

    }, [history])

    const onSuccessLogin = async(payload) => {
        setUserPayload(payload);
        setIsLoggedIn(true);
        console.log(payload);
        localStorage.setItem("userId", payload.user_id);
        // localStorage.setItem("userName", payload.)
      

        // const body = {
        //   userId: "2d0dfcf0-d920-4c0c-95b1-b50db7660bc4",
        //   email:"sonali122000@gmail.com",
        //   fullName:"Sonali Singh"
        // }
        // const res = await axios.post("https://localhost:5000/login", body);
        // console.log(res);
    history.push("/")
      }

    
     return(
        <React.Fragment>
      
        <div style={styles.containerStyle}>
          <section>
            <h1> Login </h1>
            {/* Showing Successful login message */}
  
            {/* Showing login form */}
           { !isLoggedIn &&
                <div >
                <div style={styles.formContainer} id="1c6f12f0-871b-44e4-ac36-99e527fad225">
                </div>
                </div>}
            
          </section>
        </div>
      </React.Fragment>
     )
}

export default Login;