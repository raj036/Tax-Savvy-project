import Footer from "./Homepage components/Footer";
import Header from "./Homepage components/Header";
import Homepage from "./Homepage components/Homepage";
import Register from "./pages/Register";
import Sign from "./pages/Sign";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import RequestCall from "./pages/RequestCall";
import Profile from "./Profilepage/Profile";


function App() {


  return (
    <div className="main-container">
      {/* 
      <div className="topnav">
        <Link className=""></Link>
      </div> */}


      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/request" element={<RequestCall />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
