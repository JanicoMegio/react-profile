import python from '../assets/Stack/python.svg'
import django from '../assets/Stack/django.svg';
import reactJs from '../assets/Stack/react-js.svg';
import bootStrap from '../assets/Stack/bootstrap.svg';
import docker from '../assets/Stack/docker.svg';
import git from '../assets/Stack/git.svg';
import figma from '../assets/Stack/figma.svg';
import vite from '../assets/Stack/vite.svg';
import javaScript from '../assets/Stack/javascript.svg';
import postgreSql from '../assets/Stack/postgresql.svg';
import tailWind from '../assets/Stack/tailwind-css.svg';


function Stacks(){
    return(
        <div className="container pb-5">
            <h1 className="text-center py-5 fw-bold display-3" id="stack">Stack</h1>
            <div className="row gy-4 justify-content-center">
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={python}
                    className="img-fluid"
                    alt="python"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={django}
                    className="img-fluid"
                    alt="django"
                    height="55"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={reactJs}
                    className="img-fluid"
                    alt="react-js"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={javaScript}
                    className="img-fluid"
                    alt="JavaScript"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={vite}
                    className="img-fluid"
                    alt="vite"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={bootStrap}
                    className="img-fluid"
                    alt="bootstrap"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={tailWind}
                    className="img-fluid"
                    alt="tailwind"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={figma}
                    className="img-fluid"
                    alt="figma"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={postgreSql}
                    className="img-fluid"
                    alt="PostgreSQL"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={docker}
                    className="img-fluid"
                    alt="docker"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
              <div className="col-4 col-md-3 col-lg-3">
                <div className="stock-icons text-center">
                  <img
                    src={git}
                    className="img-fluid"
                    alt="git"
                    height="65"
                    width="65"
                  />
                </div>
              </div>
            </div>
            <hr className="text-muted mt-5" />
          </div>
    )
}

export default Stacks