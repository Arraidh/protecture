import "./App.css";
import ToggleSidebar from "./components/petaPage/toggleSidebar";
import Navbar from "./components/Navbar/navbar";
import MainForum from "./components/forumPage/mainForum";
import ForumDetail from "./components/forumPage/forumDetail";
import AuthPage from "./components/authPage/authPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProfile from "./components/profilePage/mainProfile";
import AboutUsPage from "./components/aboutUsPage/aboutUsMain";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./utils/useAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
      </AuthProvider>

      <Router>
        <Routes>
          <Route path="/login" element={<AuthPage isLogin={true} />} />
          <Route path="/register" element={<AuthPage isLogin={false} />} />
          <Route path="/map" element={<ToggleSidebar />} />
          <Route path="/forum" element={<MainForum />} />
          <Route path="/profile" element={<MainProfile />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
