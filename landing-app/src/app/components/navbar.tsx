'use client';
import Link from 'next/link';
import { Nav, NavContainer, Logo, NavLinks } from './navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <Logo>UnitechX</Logo>
        </Link>
        <NavLinks>
          <Link href="#productos" className="hover:text-blue-600">Productos</Link>
          <Link href="#beneficios" className="hover:text-blue-600">Beneficios</Link>
          <Link href="#contacto" className="hover:text-blue-600">Contacto</Link>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;