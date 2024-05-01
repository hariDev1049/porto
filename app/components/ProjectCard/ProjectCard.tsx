'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
function ImgOverlayExample({ element }: { element: any }) {
  const router = useRouter();
  return (
    <div className="flex px-10 mt-3" style={{ maxWidth: '85vw' }}>
      <Container fluid className="bg-white text-balance p-3 rounded">
        <Row>
          <Col sm={8} className="flex flex-col">
            <div className="flex-grow flex flex-col">
              <h4>{element.title}</h4>
              <div className="mt-2">
                <p>{element.description}</p>
                <p>
                  {element.techstack.map((ele: any, index: any) => (
                    <li key={index}>{ele}</li>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex gap-10 py-2">
              <button
                className="bg-gray-300 hover:bg-white text-black font-bold py-2 px-4 rounded border-transparent hover:border-black border-2 flex justify-center items-center gap-3"
                onClick={() => router.push(`${element.gitlink}`)}
              >
                Source
                <FaCode className="text-xl" />
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
