import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import TweetsFeed from "./components/TweetsFeed";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">
     <Sidebar />
     <TweetsFeed />
     <Widgets />
    </div>
  );
}

export default App;
