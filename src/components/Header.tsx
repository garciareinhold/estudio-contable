import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../config/theme';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text};
  font-weight: 500;
  transition: color ${theme.transitions.default};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  z-index: 1002;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

interface IconWrapperProps {
  $isOpen: boolean;
}

const IconWrapper = styled.span<IconWrapperProps>`
  font-size: 28px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(90deg)' : 'rotate(0)'};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src="/images/logo_estudio_contable.png" alt="Estudio Contable" style={{ height: '80px', width: 'auto' }} />
        </Logo>
        <NavLinks>
          <NavLink to="/">
            Inicio
          </NavLink>
          <NavLink to="/servicios">
            Servicios
          </NavLink>
          <NavLink to="/nosotros">
            Nosotros
          </NavLink>
          <NavLink to="/clientes">
            Clientes
          </NavLink>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </NavLinks>
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <IconWrapper $isOpen={isMenuOpen}>
            <span className="material-icons">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </IconWrapper>
        </HamburgerButton>
      </Nav>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </HeaderContainer>
  );
};

export default Header; 