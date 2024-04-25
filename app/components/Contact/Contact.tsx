import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import About from '../About/About';

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full my-5">
      <h2 className="m-5">CONTACT</h2>
      <Container>
        <Row className="max-sm:px-5">
          <Col sm={7}>
            <About />
          </Col>
          <Col sm={5}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
