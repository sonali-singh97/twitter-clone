import { BrowserRouter as Router, Route, } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import TweetsFeed from "./components/TweetsFeed";
import Widgets from "./components/Widgets";

function App() {
 
  return (
    <Router>
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
     
    </Router>
  );
}

export default App;
