import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import { Footer } from "./components/Footer";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
