import Sabon from "../assets/sabon.jpg";
import quizApp from "../assets/QuizApp.jpg";
import Libro from "../assets/libro.jpg";

function Projects() {
  return (
    <section className="mb-5" id="projects">
      <div className="container libro-main">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={Libro}
                alt="Libro. Book store"
                className="img-fluid p-2 w-100 rounded-4"
                style={{ objectFit: 'scale-down', maxHeight: '250px'}}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body pb-5">
                <p className="float-end">
                  <i className="fas fa-up-right-from-square"></i>
                </p>
                <h4 className="card-title">Libro.</h4>
                <p className="card-text">
                  Ecommerce Book Website is a user-friendly online store
                  tailored for book enthusiasts. It's built with Django, a
                  powerful web framework, to provide an easy and enjoyable way
                  to discover, buy, and interact with your favorite books.
                </p>
                <div className="row text-muted">
                  <div className="col-4">
                    <p>Django</p>
                  </div>
                  <div className="col-4">
                    <p>Python</p>
                  </div>
                  <div className="col-4">
                    <p>PostgreSQL</p>
                  </div>
                  <div className="col-4">
                    <p>JavaScript</p>
                  </div>
                  <div className="col-4">
                    <p>Stripe</p>
                  </div>
                  <div className="col-4">
                    <p>HTML 5</p>
                  </div>
                  <div className="col-4">
                    <p>Bootstrap 5</p>
                  </div>
                </div>
                <a
                  href="https://github.com/JanicoMegio/libro"
                  className="card-link"
                  target="_blank"
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '100%'
                  }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container sabon-main">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={Sabon}
                alt="Libro. Book store"
                className="img-fluid p-2 w-100 rounded-4"
                style={{ objectFit: 'scale-down', maxHeight: '250px'}}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body pb-5">
                <p className="float-end">
                  <i className="fas fa-up-right-from-square"></i>
                </p>
                <h4 className="card-title">Sabon Station</h4>
                <p className="card-text">
                  A capstone project aimed at assisting firms in managing and
                  optimizing their operations through a Sales and Inventory
                  Management system.
                </p>
                <div className="row text-muted">
                  <div className="col-4">
                    <p>Django</p>
                  </div>
                  <div className="col-4">
                    <p>Python</p>
                  </div>
                  <div className="col-4">
                    <p>MySQL</p>
                  </div>
                  <div className="col-4">
                    <p>JavaScript</p>
                  </div>
                  <div className="col-4">
                    <p>jQuery Ajax</p>
                  </div>
                  <div className="col-4">
                    <p>Bootstrap 5</p>
                  </div>
                </div>
                <a
                  href="https://github.com/JanicoMegio/Django_POS"
                  className="card-link"
                  target="_blank"
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '100%'
                  }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container QuizApp-main">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={quizApp}
                alt="information Security Awareness Quiz App"
                className="img-fluid p-2 w-100 rounded-4"
                style={{ objectFit: 'scale-down', maxHeight: '250px'}}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body pb-5">
                <p className="float-end">
                  <i className="fas fa-up-right-from-square"></i>
                </p>
                <h4 className="card-title">
                  Information Security Awareness Assessment
                </h4>
                <p className="card-text">
                  An innovative quiz application designed specifically to raise
                  awareness among employees about the importance of information
                  security. Through interactive quizzes and engaging content,
                  the app aims to educate employees on various aspects of
                  cybersecurity, including recognizing threats, implementing
                  best practices, and responding effectively to security
                  incidents.
                </p>
                <div className="row text-muted">
                  <div className="col-4">
                    <p>Django</p>
                  </div>
                  <div className="col-4">
                    <p>Python</p>
                  </div>
                  <div className="col-4">
                    <p>SQLite</p>
                  </div>
                  <div className="col-4">
                    <p>Tailwind CSS</p>
                  </div>
                </div>
                <a
                  href="https://github.com/JanicoMegio/django_quiz"
                  className="card-link"
                  target="_blank"
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '100%'
                  }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects