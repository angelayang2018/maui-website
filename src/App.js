import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MauiVista from './pages/MauiVista';
import Contact from './pages/Contact';
import Listing from './pages/Listing';
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/listing' element={<Listing />} />
        <Route path = '/mauivista' element = {<MauiVista />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
