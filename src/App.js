import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import TweetsFeed from "./components/TweetsFeed";

function App() {
  return (
    <div className="app">
     <Sidebar />
     <TweetsFeed />
    </div>
  );
}

export default App;
