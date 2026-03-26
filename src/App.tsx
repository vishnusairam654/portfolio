import "./global.css";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Projects from "./componets/Projects";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100vw",
          overflow: "visible",
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
