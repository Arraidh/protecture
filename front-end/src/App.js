import "./App.css";
import Map from "./components/petaPage/Map/Map"
import ToggleSidebar from "./components/petaPage/toggleSidebar";

function App() {
  return (
    <div className="App">
      <ToggleSidebar />
      <Map />
    </div>
  );
}

export default App;
