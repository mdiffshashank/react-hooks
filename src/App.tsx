import "./App.css";
import BrowserActivity from "./components/visibility";
import Search from "./components/search";
import Users from "./components/users";
import Toggle from "./components/toggle";

function App() {
  return (
    <div className="app">
      <Search />
      <Users />
      <Toggle />
      <BrowserActivity />
    </div>
  );
}

export default App;
