import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ourworks" element={<OurWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
