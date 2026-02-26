import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import "./Home.scss";

function Home() {
  const [view, setView] = useState("home");
  const [footerOpen, setFooterOpen] = useState(false);

  return (
    <div className="home-container">
      <Navbar setView={setView} />

      <div className={`split ${view}`}>
        <div className="panel left">
          <Hero />
        </div>

        <div className="divider"></div>

        <div className="panel right">
          <About />
        </div>
      </div>

      <Footer footerOpen={footerOpen} setFooterOpen={setFooterOpen} />
    </div>
  );
}

export default Home;