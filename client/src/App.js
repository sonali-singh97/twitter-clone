import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import TweetsFeed from "./components/TweetsFeed";
import Widgets from "./components/Widgets";
import Profile from "./components/Profile";

function App() {

    const loggedIn = localStorage.getItem("userId")

    

  return (
    <Router>
      <Route path="/register" exact >
        <Register />
      </Route>
      <Route path="/login" exact >
        <Login />
      </Route>
      <Route path= "/" exact >
    <div className="app">
     <Sidebar />
     <TweetsFeed />
     <Widgets />
     </div> 
     </Route>
     <Route path= "/profile" exact >
    <div className="app">
     <Sidebar />
     <Profile />
     <Widgets />
     </div> 
     </Route>
     
    </Router>
  );
}

export default App;
