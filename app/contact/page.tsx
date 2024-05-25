'use client';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '@/app/components/ContactForm/ContactForm';
import About from '@/app/components/About/About';

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full flex-grow">
      <Container className="sm:mt-5">
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
