import "./App.css";
import Map from "./components/petaPage/Map/Map";
import ToggleSidebar from "./components/petaPage/toggleSidebar";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToggleSidebar />
      <Map />
    </div>
  );
}

export default App;
