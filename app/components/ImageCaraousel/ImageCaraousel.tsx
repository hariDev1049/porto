import { Carousel } from 'react-bootstrap';
import works from '@/app/utils/achievements';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

const ImageCaraousel = () => {
  const themeState = useContext(ThemeContext);

  if (!themeState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4 bottom-0 flex flex-col items-center sm:items-start">
      <h5 className={themeState.isDark ? 'text-white' : 'text-slate-800'}>
        Personal Highlights so far..
      </h5>
      <div className="w-3/4 mb-5 flex justify-center sm:justify-start">
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
                <Carousel.Caption className="text-white font-semibold">
                  <h5>{work.title}</h5>
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
