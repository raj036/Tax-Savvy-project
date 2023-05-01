import Footer from "./Homepage components/Footer";
import Header from "./Homepage components/Header";
import Homepage from "./Homepage components/Homepage";
import Register from "./pages/Register";
import Sign from "./pages/Sign";
import "./App.css"
import {
  // BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import RequestCall from "./pages/RequestCall";
import Contact from "./Profilepage/Contact";
import Profile from "./Profilepage/Profile";
import AboutUs from "./Profilepage/AboutUs";
import ProfileDetails from "./Profilepage/ProfileDetails";


function App() {


  return (
    <div className="main-container">

      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/request" element={<RequestCall />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profiledetails" element={<ProfileDetails />} />
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
