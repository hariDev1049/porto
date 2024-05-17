'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
  const themeState = useContext(ThemeContext);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar data-bs-theme="light" className="flex">
      <Container className="py-2">
        <div
          className={`${
            isOpen ? 'hidden' : 'flex w-full'
          } sm:justify-normal justify-evenly gap-14`}
        >
          <h4>
            <Link href="https://github.com/hariDev1049">
              <FaGithub
                className={
                  checked
                    ? 'text-slate-800 sm:text-2xl'
                    : 'text-white sm:text-2xl'
                }
              />
            </Link>
          </h4>
          <h4>
            <Link href="https://www.linkedin.com/in/hari-prasad-dev1049/">
              <FaLinkedin
                className={
                  checked
                    ? 'text-slate-800 sm:text-2xl '
                    : 'text-white sm:text-2xl'
                }
              />
            </Link>
          </h4>
          <div className="sm:hidden">
            <Switch
              onChange={handleChange}
              checked={checked}
              className="ml-4"
              onHandleColor="#d0e2ec"
              onColor="#ebeeef"
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 3px rgba(0, 0, 0, 0.2)"
              height={15}
              width={32}
            />
          </div>
          <GiHamburgerMenu
            className={`${
              isOpen ? 'hidden' : 'flex'
            } text-2xl text-white sm:hidden`}
            onClick={handleClick}
          />
        </div>
        <div className="hidden sm:flex">
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
            <div className={`${isOpen ? 'hidden' : ''}`}>
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
        </div>

        <div
          className={`${
            isOpen ? 'flex flex-col' : 'hidden'
          } h-screen w-full gap-7 py-2 px-4 `}
        >
          <div className="w-full flex justify-end ">
            <IoIosCloseCircleOutline
              className={`${
                isOpen ? 'flex sm:hidden' : 'hidden'
              } text-2xl text-white `}
              onClick={handleClick}
            />
          </div>
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
                onClick={handleClick}
              >
                {element.name}
              </Link>
            </Nav.Link>
          ))}

          <div className={`flex justify-center gap-14 pt-28`}>
            <h4>
              <Link href="https://github.com/hariDev1049">
                <FaGithub
                  className={
                    checked
                      ? 'text-slate-800 sm:text-2xl'
                      : 'text-white sm:text-2xl'
                  }
                />
              </Link>
            </h4>
            <h4>
              <Link href="https://www.linkedin.com/in/hari-prasad-dev1049/">
                <FaLinkedin
                  className={
                    checked
                      ? 'text-slate-800 sm:text-2xl '
                      : 'text-white sm:text-2xl'
                  }
                />
              </Link>
            </h4>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
