'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
const Header = () => {
  const themeState = useContext(ThemeContext);
  const pathname = usePathname();

  if (!themeState) {
    return <div>Loading...</div>;
  }

  const paths = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: any) => {
    themeState.setIsDark(checked);
    setChecked(nextChecked);
  };

  return (
    <Navbar data-bs-theme="light" className="flex">
      <Container>
        <div className="flex gap-14">
          <h4>
            <Link href="https://github.com/hariDev1049" target="_blank">
              <FaGithub
                className={
                  checked ? 'text-slate-800 text-2xl' : 'text-white text-2xl'
                }
              />
            </Link>
          </h4>
          <h4>
            <Link href="https://www.linkedin.com/in/hari-prasad-dev1049/" target="_blank">
              <FaLinkedin
                className={
                  checked ? 'text-slate-800 text-2xl' : 'text-white text-2xl'
                }
              />
            </Link>
          </h4>
        </div>
        <Nav className="me-right gap-10">
          {paths.map((element) => (
            <Nav.Link key={element.name}>
              <Link
                href={element.path}
                className={
                  pathname === element.path && checked
                    ? `no-underline  font-extrabold ${
                        checked ? 'text-slate-800' : 'text-white'
                      }`
                    : `no-underline ${
                        checked ? 'text-slate-800' : 'text-white'
                      }`
                }
              >
                {element.name}
              </Link>
            </Nav.Link>
          ))}
          <div>
            <Switch
              onChange={handleChange}
              checked={checked}
              className="ml-4 mt-2"
              onHandleColor="#d0e2ec"
              onColor="#ebeeef"
              handleDiameter={26}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 3px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
            />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
