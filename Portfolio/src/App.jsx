import "./index.css";
import Stacks from "./components/Stacks.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container-fluid main-container mt-5 mb-4" id="content-end">
        <div className="row m-0">
          <div className="col-12 col-lg-5" id="nav-side">
            <Header/>
          </div>
          <div className="col-12 col-lg-7">
            <About/>
            <Experience/>
            <Stacks/>
            <Projects/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
