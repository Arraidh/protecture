import "./App.css";
import ToggleSidebar from "./components/petaPage/toggleSidebar";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/fotterPage/fotterPage";
import MainForum from "./components/forumPage/mainForum";
import ForumDetail from "./components/forumPage/forumDetail";
import AuthPage from "./components/authPage/authPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProfile from "./components/profilePage/mainProfile";
import AboutUsPage from "./components/aboutUsPage/aboutUsMain";
import Index from "./components/homeIndex/homeIndex";
import EditProfileForm from "./components/profilePage/editProfileForm";
import ProfileCard from "./components/profilePage/profileCard";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./utils/useAuth";
import HomeIndex from "./components/homeIndex/homeIndex";

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
          <Route path="/home" element={<HomeIndex />} />
          <Route path="/map" element={<ToggleSidebar />} />
          <Route path="/" element={<Index />} />
          <Route path="/forum" element={<MainForum />} />
          <Route path="/profile" element={<MainProfile />}></Route>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/editProfileForm" element={<EditProfileForm />} />
        </Routes>
      </Router>
      <AuthProvider>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
