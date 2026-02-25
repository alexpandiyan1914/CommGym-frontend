import { useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  const [view, setView] = useState("home");
  const [footerOpen, setFooterOpen] = useState(false);

  return (
    <div className="container">
      <Navbar setView={setView} />

      <div className={`split-container ${view}`}>
        <div className="left">
          <Hero />
        </div>

        <div className="divider"></div>

        <div className="right">
          <About />
        </div>
      </div>

      <Footer 
        footerOpen={footerOpen} 
        setFooterOpen={setFooterOpen} 
      />
    </div>
  );
}

export default Home;