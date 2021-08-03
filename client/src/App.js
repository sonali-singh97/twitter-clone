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
   { loggedIn ?   <div className="app">
     <Sidebar />
     <TweetsFeed />
     <Widgets />
     </div> : <Redirect to="/login" />}
     </Route>
     <Route path= "/profile" exact >
    { loggedIn ?   <div className="app">
     <Sidebar />
     <Profile />
     <Widgets />
     </div> : <Redirect to="/login" />}
     </Route>
     
    </Router>
  );
}

export default App;
