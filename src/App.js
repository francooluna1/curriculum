import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMapMarkerAlt,
  faUser,
  faPencilAlt,
  faWrench,
  faDice,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faCaretSquareRight,
  faCommentDots,
  faStar,
  faStarHalf,
} from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div>
      <header className="bg-info">
        <Container className="text-light">
          <Row className="py-5">
            <Col xs={12} md={3} className="d-flex justify-content-center">
              <Image src="./fotocurriculum.png" rounded className="foto" />
            </Col>
            <Col
              xs={12}
              md={5}
              className="d-flex flex-column justify-content-center centrado"
            >
              <h1 className="display-4">Luna Franco</h1>
              <h4>Desarrollador Web Junior</h4>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column justify-content-center contacto"
            >
              <span className="d-flex justify-content-start">
                <FontAwesomeIcon icon={faUser} className="mr-2 mt-1" />
                <p>
                  <strong>EDAD:</strong> 23 años
                </p>
              </span>
              <span className="d-flex justify-content-start">
                <FontAwesomeIcon icon={faMobileAlt} className="mr-2 mt-1" />
                <p>
                  <strong>TELEFONO:</strong> +54 9 3814405241
                </p>
              </span>
              <span className="d-flex justify-content-start">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 mt-1" />
                <p>
                  <strong>EMAIL:</strong> francooluna1@hotmail.com
                </p>
              </span>
              <span className="d-flex justify-content-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-1" />
                <p>
                  <strong>LOCALIDAD:</strong> Tucuman, Argentina
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="container my-5">
        <span className="mb-2 titulos">
          <FontAwesomeIcon icon={faUser} className="mr-2 mt-1" />
          <p>
            <strong>SOBRE MI</strong>
          </p>
        </span>
        <span className="d-flex justify-content-start">
          <FontAwesomeIcon icon={faCaretSquareRight} className="mr-2 mt-1" />
          <p>
            Me considero una persona responsable, comprometida y puntual, con
            facilidad de adaptacion y capacidad de trabajar tanto en equipo como
            de manera particular para alcanzar los objetivos propuestos por la
            empresa.
          </p>
        </span>
        <span className="d-flex justify-content-start">
          <FontAwesomeIcon icon={faCaretSquareRight} className="mr-2 mt-1" />
          <p>Soy proactivo e innovador, me gusta aportar ideas.</p>
        </span>
        <span className="d-flex justify-content-start">
          <FontAwesomeIcon icon={faCaretSquareRight} className="mr-2 mt-1" />
          <p>
            Trato siempre de tener una menta positiva, tanto en mi vida como en
            lo profesional.
          </p>
        </span>
      </section>
      <hr></hr>
      <section className="container my-5">
        <Row>
          <Col xs={12} md={6}>
            <span className="mb-2 titulos">
              <FontAwesomeIcon icon={faPencilAlt} className="mr-2 mt-1" />
              <p>
                <strong>EDUCACION</strong>
              </p>
            </span>
            <div className="my-2 texto">
              <span>
                <h5>Tecnicatura Universitaria en Programacion | Facultad Regional Tucuman</h5>
                <p>2021 - Hoy</p>
                <h6>Cursando actualmente el primer año</h6>
              </span>
            </div>
            <div className="my-4 texto">
              <span>
                <h5>Secundario Completo | Nuestra Señora de Montserrat</h5>
                <p>2009 - 2015</p>
                <h6>
                  Titulo: Bachillerato en administración y gestión de empresas
                </h6>
              </span>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <span className="mb-2 titulos">
              <FontAwesomeIcon icon={faPencilAlt} className="mr-2 mt-1" />
              <p>
                <strong>CURSOS</strong>
              </p>
            </span>
            <div className="my-2 texto">
              <span>
                <h5>Developer FullStack | RollingCodeSchool</h5>
                <p className="mt-4">2020</p>
                <h6 className="mt-4">FrontEnd y Backend.</h6>
              </span>
            </div>
            <div className="my-4 texto">
              <span>
                <h5>Reparacion y mantenimiento de PC</h5>
                <p>2018</p>
                <h6>Curso de reparacion y mantenimiento de computadoras</h6>
              </span>
            </div>
          </Col>
        </Row>
      </section>
      <hr></hr>
      <section className="container my-5">
        <Row>
          <Col xs={12} md={6}>
            <span className="mb-2 titulos">
              <FontAwesomeIcon icon={faWrench} className="mr-2 mt-1" />
              <p>
                <strong>HABILIDADES</strong>
              </p>
            </span>
            <div className="mb-4">
              <strong>HTML5</strong>
              <ProgressBar variant="info" animated now={95} />
            </div>
            <div className="mb-4">
              <strong>CCS3</strong>
              <ProgressBar variant="info" animated now={90} />
            </div>
            <div className="mb-4">
              <strong>BOOTSTRAP 4</strong>
              <ProgressBar variant="info" animated now={95} />
            </div>
            <div className="mb-4">
              <strong>GIT</strong>
              <ProgressBar variant="info" animated now={85} />
            </div>
            <div className="mb-4">
              <strong>JAVASCRIPT</strong>
              <ProgressBar variant="info" animated now={50} />
            </div>
            <div className="mb-4">
              <strong>REACT</strong>
              <ProgressBar variant="info" animated now={75} />
            </div>
            <div className="mb-4">
              <strong>NODEJS</strong>
              <ProgressBar variant="info" animated now={40} />
            </div><div className="mb-4">
              <strong>MONGODB</strong>
              <ProgressBar variant="info" animated now={40} />
            </div>
            <div className="mb-4">
              <strong>SCRUM</strong>
              <ProgressBar variant="info" animated now={80} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <span className="mb-2 titulos">
              <FontAwesomeIcon icon={faCommentDots} className="mr-2 mt-1" />
              <p>
                <strong>LENGUAJES</strong>
              </p>
            </span>
            <div className="my-2 texto">
              <span>
                <h5>Español | Primer Lenguaje</h5>
                <FontAwesomeIcon icon={faStar} className="mx-2" />
                <FontAwesomeIcon icon={faStar} className="mx-2" />
                <FontAwesomeIcon icon={faStar} className="mx-2" />
                <FontAwesomeIcon icon={faStar} className="mx-2" />
                <FontAwesomeIcon icon={faStar} className="mx-2" />
              </span>
            </div>
            <div className="my-2 texto">
              <span>
                <h5>Ingles | Segundo Lenguaje</h5>
                <FontAwesomeIcon icon={faStar} className="mx-2" />
                <FontAwesomeIcon icon={faStar} className="mx-2" />
              </span>
            </div>
            <div className="my-2 texto">
              <span>
                <h5>Portugues | Tercer Lenguaje</h5>
                <FontAwesomeIcon icon={faStar} className="mx-2" />
                <FontAwesomeIcon icon={faStarHalf} className="mx-2" />
              </span>
            </div>
            <span className="mt-5 mb-2 titulos">
              <FontAwesomeIcon icon={faDice} className="mr-2 mt-1" />
              <p>
                <strong>HOBBIES</strong>
              </p>
            </span>
            <div className='texto'>
              <span>Futbol | Natación | Gimnasio | VideoJuegos</span>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default App;
