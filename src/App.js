import Topbar from "./compoments/topbar/Topbar";
import Intro from "./compoments/intro/Intro";
import Portfolio from "./compoments/portfolio/Portfolio";
import Work from "./compoments/work/Work";
import Contact from "./compoments/contact/Contact";
import Menu from "./compoments/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Work />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
