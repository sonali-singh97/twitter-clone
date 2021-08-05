import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { createContext , useContext, useEffect , useState} from "react"
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import TweetsFeed from "./components/TweetsFeed";
import Widgets from "./components/Widgets";
import Profile from "./components/Profile";

export const UserContext = createContext();


function App() {

 const [state, setState] = useState();

  useEffect(() => {
    let user = localStorage.getItem("user");
    console.log(user)
    if (user) {
     user = JSON.parse(user)
      setState(user)
    } 
  }, []);
  
  return (
    <UserContext.Provider value={{ state, setState }}>
      <Router>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <div className="app">
            <Sidebar />
            <TweetsFeed />
            <Widgets />
          </div>
        </Route>
        <Route path="/profile" exact>
          <div className="app">
            <Sidebar />
            <Profile />
            <Widgets />
          </div>
        </Route>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
