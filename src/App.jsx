import NavComponent from "./components/NavComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import TopBannerComponent from "./components/TopBannerComponent/TopBannerComponent";
import HandleLoadingComponent from './components/HandleLoadingComponent/HandleLoadingComponent'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { FooterLinks, ContactInfo,socialLinks,policyLinks} from "./data/FooterData";
import { NavLinks } from "./data/NavData";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";


function App() {

  return (
    <>
      <HandleLoadingComponent />
      <ScrollToTop />
      <TopBannerComponent title={"Admission is Open, Grab your seat now"} />
      <NavComponent logo={"/Task3/images/Navbar/Logo.svg"} items={NavLinks} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
      <FooterComponent
        logo={"/Task3/images/Footer/Logo.svg"}
        about={
          "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        }
        ContactInfo={ContactInfo}
        FooterLinks={FooterLinks}
        policyLinks={policyLinks}
        socialLinks={socialLinks}
        copyright={
          "Copyright © [2023] Little Learners Academy. All rights reserved."
        }
      />
    </>
  );
}

export default App;
