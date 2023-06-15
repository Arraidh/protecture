import "./App.css";
import Map from "./components/petaPage/Map/Map";
import ToggleSidebar from "./components/petaPage/toggleSidebar";
import Navbar from "./components/Navbar/navbar";
import MainForum from "./components/forumPage/mainForum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainForum />
      {/* <ToggleSidebar />
      <Map /> */}
    </div>
  );
}

export default App;
