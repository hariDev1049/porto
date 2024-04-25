import Image from 'next/image';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>
        <Image
          src="/profile.jpeg"
          width={200}
          height={200}
          alt="Picture of the author"
          style={{
            objectFit: 'cover',
            borderRadius: '100px', //👈 and here you can select border radius
          }}
        />
      </div>
      <div className="mt-5 text-balance text-center text-2xl w-4/5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
        quae fugiat. Corrupti eius illum quaerat dolorum, tempora at inventore
        reprehenderit quia deleniti eveniet ipsa, eum excepturi itaque vitae
        fugiat delectus? Lorem ipsum dolor sit.
      </div>
      <div className="mt-5 flex gap-5">
        <Button variant="dark">Download CV</Button>
        <Button variant="outline-dark">Hire Me</Button>
      </div>

      <div className="mt-5 gap-3"></div>
    </div>
  );
};

export default Hero;
