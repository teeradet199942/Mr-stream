import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import { Route, Routes } from "react-router-dom";
import Product from "./page/Product";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/Products" element={<Product/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
