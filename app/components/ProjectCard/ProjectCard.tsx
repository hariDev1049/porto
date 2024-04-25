import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ImgOverlayExample({ element }: { element: any }) {
  return (
    <div className="flex px-10 mt-5" style={{ maxWidth: '85vw' }}>
      <Container fluid className="bg-white text-balance p-3 rounded">
        <Row>
          <Col sm={8}>
            <div>
              <h4>{element.title}</h4>
              <p>{element.description}</p>
              <h6>{element.techstack}</h6>
            </div>
            <div className="flex gap-10 py-2">
              <button className="bg-gray-300 hover:bg-white text-black font-bold py-2 px-4 rounded border-transparent hover:border-black border-2">
                Source
              </button>
              <button className="bg-gray-50 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded border-2 border-black hover:border-none">
                Demo
              </button>
            </div>
          </Col>
          <Col sm={4}>
            <div className="h-full overflow-hidden">
              <img
                src={element.image}
                alt={element.title}
                className="object-cover h-full top-0 left-0 transform translate-x-10 duration-300 hover:-rotate-3 max-sm:translate-x-0 max-sm:pt-2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImgOverlayExample;
