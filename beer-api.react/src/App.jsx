import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AllBeerSection } from "./pages/AllBeerSection";
import { BeerDetails } from "./components/BeerDetails";

function App() {
  return (
    <div className="super-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-beer" element={<AllBeerSection />} />
          <Route path="/all-beer/:id" element={<BeerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
