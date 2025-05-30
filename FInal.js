
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";
import Form from "./6.Get Started";
import About from "./1.About";
import Location from "./2.Location";
import Team from "./5.Team";
import Studio from "./3.Studio";
import Buy from "./4.Buy";

function Final() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1.About" element={<About />} />
        <Route path="/2.Location" element={<Location />} />
        <Route path="/3.Studio" element={<Studio />} />
        <Route path="/4.Buy" element={<Buy />} />
        <Route path="/5.Team" element={<Team />} />
        <Route path="/6.Get Started" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Final;
