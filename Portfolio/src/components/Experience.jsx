import resume from '../assets/document/Resume.pdf';

function Experience() {
  return (
    <section className="mb-5" id="experience">
      <div className="container">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="fw-normal">
              <span className="fw-bold">Freelance Web Developer</span>
            </h5>
            <p className="fw-bold">
              <small>PRESENT</small>
            </p>
            <p>
              I am currently open to accepting projects that align with my
              skills and interests. Being a tech enthusiast, I specialize in web
              development using frameworks such as Django. I have a strong
              passion for creating dynamic and user-friendly web applications,
              and my expertise extends to various aspects of information
              technology.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="fw-normal">
              <span className="fw-bold">IT Staff</span> &#8226; Internship
            </h5>
            <p>Sparta Credit Management Services Inc.</p>
            <p className="fw-bold">
              <small>MAR &ndash; MAY 2023</small>
            </p>
            <p>
              Monitored system performance, conducted routine checks, assisted
              in hardware and software installation and maintenance, provided
              user support, and aided in network and server troubleshooting for
              seamless operation.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="fw-normal">
              <span className="fw-bold">Graphic Designer</span> &#8226; Work
              Immersion
            </h5>
            <p>Asian Institute of Computer Studies</p>
            <p className="fw-bold">
              <small>MAR &ndash; MAY 2018</small>
            </p>
            <p>
              Designed marketing collateral including brochures, flyers, social
              media graphics, and presentations, while also assisting in photo
              editing using software like Adobe Photoshop and Lightroom to
              enhance and manipulate images, all with a keen focus on
              maintaining consistent branding across design projects.
            </p>
          </div>
        </div>
      </div>
      <a href={resume} target="_blank" className="resume d-block pt-4">
        View My Resume <i className="fas fa-up-right-from-square fa-md"></i>
      </a>
    </section>
  );
}

export default Experience