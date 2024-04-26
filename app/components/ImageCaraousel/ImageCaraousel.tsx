import { Carousel } from 'react-bootstrap';
import works from '@/app/utils/achievements';
const ImageCaraousel = () => {
  return (
    <div className="mt-4 bottom-0 flex flex-col max-sm:items-center sm:items-center md:items-start">
      <h5>Career highlights so far..</h5>
      <div className="w-5/6 mb-5">
        <Carousel data-bs-theme="dark" className="mt-3 w-5/6">
          {works.map((work) => {
            return (
              <Carousel.Item interval={3000} key={work.id}>
                <div className="object-cover">
                  <img
                    className="d-block w-100 rounded"
                    src={work.image}
                    alt={work.title}
                  />
                </div>
                <Carousel.Caption className="text-white">
                  <h5>{work.title}</h5>
                  <p>{work.doc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>{' '}
      </div>
    </div>
  );
};

export default ImageCaraousel;
