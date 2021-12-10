import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Apply from "./pages/Apply";
import Bio from "./pages/Bio";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
