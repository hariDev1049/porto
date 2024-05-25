'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCode } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { SiNextdotjs, SiReact } from 'react-icons/si';
import { IoLogoReact } from 'react-icons/io5';
import { FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import { motion } from 'framer-motion';

function ImgOverlayExample({ element }: { element: any }) {
  const router = useRouter();
  return (
    <div className="flex px-10 my-3 sm:w-3/4">
      <Container fluid className="bg-white text-balance p-3 rounded">
        <Row>
          <Col sm={8} className="flex flex-col overflow-hidden">
            <motion.div
              className="flex-grow flex flex-col"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4>{element.title}</h4>
              <div className="mt-2">
                <p>{element.description}</p>
                <p className="flex gap-4">
                  {element.techstack.map((ele: string, index: number) => {
                    const iconMap: { [key: string]: JSX.Element } = {
                      reactjs: <IoLogoReact key={index + ele} size={24} />,
                      nextjs: <SiNextdotjs key={index + ele} size={24} />,
                      firebase: <IoLogoFirebase key={index + ele} size={24} />,
                      tailwind: <SiTailwindcss key={index + ele} size={24} />,
                      nodejs: <FaNodeJs key={index + ele} size={24} />,
                      mongodb: <DiMongodb key={index + ele} size={24} />,
                    };
                    return (
                      <li className="list-none my-3">{iconMap[ele]}</li> || null
                    );
                  })}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-10 py-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button
                className="bg-gray-300 hover:bg-white text-black font-bold py-2 px-4 rounded border-transparent hover:border-black border-2 flex justify-center items-center gap-3"
                onClick={() => router.push(`${element.gitlink}`)}
              >
                Source
                <FaCode className="text-xl" />
              </button>
            </motion.div>
          </Col>
          <Col sm={4} className="overflow-hidden">
            <motion.div
              className="h-full overflow-hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={element.image}
                alt={element.title}
                className="object-cover h-full top-0 left-0 transform translate-x-10 duration-300 hover:-rotate-3 max-sm:translate-x-0 max-sm:pt-2"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImgOverlayExample;
