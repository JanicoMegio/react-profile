import janico from "../assets/janico-picture-01.jpg";

function Header() {
  return (
    <div className="container mx-md-5 mx-sm-5 sticky-lg-top header-name">
      <img
        src={janico}
        className="mb-4 my-picture img-fluid mt-5 mt-lg-0 mt-xl-0"
        alt="Janico Picture"
      />
      <h2>Hi, I'm</h2>
      <h1 className="text-start fw-bold display-5">Janico Megio</h1>
      <h2 className="text-start mb-3">
        a Full-Stack <span className="helloworld">Developer</span>
      </h2>
      <div className="container mb-5 social-link">
        <a
          href="https://github.com/JanicoMegio"
          target="_blank"
          className="btn d-inline"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/hanikooosan/"
          className="btn d-inline"
          target="_blank"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a
          href="https://www.facebook.com/HanikoMegio/"
          target="_blank"
          className="btn d-inline"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/janico-megio-95751b267/
              "
          className="btn d-inline"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>

      <nav className="my-4" id="navbar">
        <a
          href="#about"
          className="h6 d-block my-3"
          style={{
            textDecoration: 'none',
            transition: 'color 0.3s ease, background-color 0.3s ease'
          }}
        >
          ABOUT
        </a>
        <a
          href="#experience"
          className="h6 d-block my-3"
          style={{
            textDecoration: 'none',
            transition: 'color 0.3s ease, background-color 0.3s ease'
          }}
        >
          EXPERIENCE
        </a>
        <a
          href="#projects"
          className="h6 d-block my-3"
          style={{
            textDecoration: 'none',
            transition: 'color 0.3s ease, background-color 0.3s ease'
          }}
        >
          PROJECTS
        </a>
      </nav>
    </div>
  );
}

export default Header
